<template>
  <div>
    <!-- User Interface controls -->
    <b-row>
      <b-col>
        <b-form-input v-model="filter" placeholder="Type to Search" />
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      :key="1"
      show-empty
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="['name']"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <template v-slot:cell(name)="data">{{ data.item.name }}</template>
      <template v-slot:cell(actions)="data">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="open(data.item.id)" class="mr-1">
          Open
        </b-button>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable */

import "@leanix/reporting";
import { fileURLToPath } from "url";

// For some reason this line is needed otherwise whole object is displayed
// let items = [{ name: "App1", id: "12345" }];

export default {
  props: {
    items: Array,
  },
  data() {
    return {
      fields: ["name", "actions"],
      currentPage: 1,
      perPage: 15,
      totalRows: this.items.length,
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  methods: {
    open(item, index, button) {
      lx.openLink(
        `https://gear.leanix.net/GEAR/factsheet/Application/` + item,
        "_blank"
      );
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
