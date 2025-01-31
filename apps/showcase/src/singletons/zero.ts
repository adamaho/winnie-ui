import {
  type Row,
  Zero,
  createSchema,
  number,
  string,
  table,
} from "@rocicorp/zero";

/* -------------------------------------------------------------------------------------------------
 * Schema
 * -----------------------------------------------------------------------------------------------*/
const sessions = table("sessions")
  .columns({
    id: string(),
    sessionId: string(),
    duration: number(),
    stake: number(),
    win: number(),
    notes: string(),
  })
  .primaryKey("sessionId");

const schema = createSchema(1, {
  tables: [sessions],
});

/* -------------------------------------------------------------------------------------------------
 * Zero
 * -----------------------------------------------------------------------------------------------*/
export const zero = new Zero({
  userID: "winnie",
  schema,
  // This is often easier to develop with if you're frequently changing
  // the schema. Switch to 'idb' for local-persistence.
  kvStore: "mem",
});

export type Schema = typeof schema;
export type Session = Row<typeof schema.tables.sessions>;
