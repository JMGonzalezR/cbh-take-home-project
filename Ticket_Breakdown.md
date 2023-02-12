# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

-   Data is saved in the database in the Facilities, Agents, and Shifts tables
-   A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
-   A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add custom id to Agent table

**Description:** Add a new column to the Agent table called `custom_id` to store the custom id of the Agent.

**Acceptance Criteria:**

-   The `custom_id` column should be added to the Agent table
-   The `custom_id` should be able to be updated by the Facility when the add or edit an Agent
-   The `custom_id` should be unique for each Facility

**Time/effort estimate:** 3 hours/4 hours

**Implementation details:**

-   Add a new column to the Agent table called `custom_id` to store the custom id of the Agent.
-   Add a new field to the Agent form to allow the Facility to add or edit the custom id of the Agent.
-   Add a new validation to the Agent form to check if the custom id is unique for the Facility.
-   Add a new migration to add the `custom_id` column to the Agent table.

### Ticket 2: Retrieve custom id for each Shift

**Description:** Retrieve the custom id of the Agent assigned to each Shift.

**Acceptance Criteria:**

-   The `getShiftsByFacility` function should return the custom id of the Agent assigned to each Shift.

**Time/effort estimate:** 2 hours/3 hours

**Implementation details:**

-   Modify the query in the `getShiftsByFacility` function to include the `custom_id` of the Agent assigned to each Shift.
-   Update the code to use the `custom_id` instead of the `id` of the Agent assigned to each Shift.

### Ticket 3: Add custom id to report

**Description:** Add the custom id of the Agent assigned to each Shift to the report.

**Acceptance Criteria:**

-   The `generateReport` function should return the custom id of the Agent assigned to each Shift.

**Time/effort estimate:** 1 hours/2 hours

**Implementation details:**

-   Modify the query in the `generateReport` function to include the `custom_id` of the Agent assigned to each Shift.
-   Update the pdf template to use the `custom_id` instead of the `id`.

### Ticket 4: Update the database to include the custom id for existing Agents

**Description:** Update the database to include the custom id property for existing Agents.

**Acceptance Criteria:**

-   The database should include the `custom_id` property for existing Agents.

**Time/effort estimate:** 4 hours/5 hours

**Implementation details:**

-   Add a new migration to add the `custom_id` column to the Agent table.
-   Add a new function to generate a unique custom id for each Agent.
-   Update the database to include the `custom_id` property for existing Agents.
-   Update the form for editing an Agent to include the `custom_id` property.
