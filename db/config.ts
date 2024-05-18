import { defineDb, defineTable, column } from 'astro:db';

const Drawing = defineTable({ columns: {
  id: column.text({ primaryKey: true }),
  canvasData: column.json(),
  logo: column.text(),
  artist: column.text(),
  reports: column.number({ default: 0 })
}});

// https://astro.build/db/config
export default defineDb({
  tables: { Drawing }
});
