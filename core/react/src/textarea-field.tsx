/**
 * Portions of this code are from the react-aria
 * All rights reserved.
 *
 * @see https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/textfield/src/TextArea.tsx
 */
import {
  type ComponentRef,
  type ForwardedRef,
  useCallback,
  useRef,
} from "react";
import {
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";

import { chain, useLayoutEffect } from "@react-aria/utils";
import { mergeRefs } from "@react-aria/utils";
import { useControlledState } from "@react-stately/utils";
import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * TextAreaField
 * -----------------------------------------------------------------------------------------------*/
type TextAreaFieldProps = AriaTextFieldProps & {
  /**
   * Ref to text area field element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaTextField>>;
};

/**
 * # TextAreaField
 * Allows a user to enter multiline plain text.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <TextAreaField>
 *  <FieldLabel />
 *  <FieldDescription />
 *  <TextArea />
 *  <FieldError />
 * </TextAreaField>
 * ```
 */
function TextAreaField({
  children,
  className,
  ref,
  ...props
}: TextAreaFieldProps) {
  return (
    <AriaTextField
      {...props}
      data-component="field"
      className={clsx("wui-field wui-textarea-field", className)}
      ref={ref}
    >
      {children}
    </AriaTextField>
  );
}

/* -------------------------------------------------------------------------------------------------
 * TextArea
 * -----------------------------------------------------------------------------------------------*/
type TextAreaProps = AriaTextAreaProps & {
  /**
   * Ref to text area element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaTextArea>>;
};

function TextArea({
  children,
  className,
  ref,
  onChange,
  ...props
}: TextAreaProps) {
  /**
   * Create a ref for the textarea
   */
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Merge the refs
   */
  const mergedRefs = mergeRefs(textareaRef, ref);

  /**
   * Track the textarea value for the purposes of modifying the height of the textarea
   */
  let [textareaValue, setTextareaValue] = useControlledState(
    props.value,
    props.defaultValue ?? "",
    () => {},
  );

  /**
   * Modify the style of the textarea as the height
   * of the textarea changes
   */
  const onHeightChange = useCallback(() => {
    if (textareaRef.current) {
      let input = textareaRef.current;
      let prevAlignment = input.style.alignSelf;
      let prevOverflow = input.style.overflow;
      // Firefox scroll position is lost when overflow: 'hidden' is applied so we skip applying it.
      // The measure/applied height is also incorrect/reset if we turn on and off
      // overflow: hidden in Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1787062
      let isFirefox = "MozAppearance" in input.style;
      if (!isFirefox) {
        input.style.overflow = "hidden";
      }
      input.style.alignSelf = "start";
      input.style.height = "auto";

      // offsetHeight - clientHeight accounts for the border/padding.
      input.style.height = `${input.scrollHeight + (input.offsetHeight - input.clientHeight)}px`;
      input.style.overflow = prevOverflow;
      input.style.alignSelf = prevAlignment;
    }
  }, [textareaRef]);

  /**
   * Calculate height when the value of the textarea changes
   */
  useLayoutEffect(() => {
    if (textareaRef.current) {
      onHeightChange();
    }
  }, [onHeightChange, textareaValue, textareaRef]);

  return (
    <AriaTextArea
      {...props}
      data-component="textarea"
      data-slot="control"
      className={clsx("wui-control wui-textarea", className)}
      onChange={chain(onChange, setTextareaValue)}
      ref={mergedRefs}
    >
      {children}
    </AriaTextArea>
  );
}

export { TextAreaField, TextArea };
export type { TextAreaFieldProps, TextAreaProps };
