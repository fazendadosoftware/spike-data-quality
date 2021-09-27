<template>
  <b-row :key="key">
    <b-col>
      <span style="font-size: 18px; font-weight: bold">Core</span>
      <b-row style="margin-bottom: 10px">
        <Card :kpi="withoutSDM" description="# w/o SDM" facet="SDM" />
        <Card
          :kpi="withoutBusinessCapability"
          description="# w/o Business Capability"
          facet="DomainUsage"
        />
        <Card
          :kpi="withoutLifecycle"
          description="# w/o Lifecycle"
          facet="Lifecycle"
        />
        <Card
          :kpi="withoutCountry"
          description="# w/o Country"
          facet="Country"
        />
        <Card
          :kpi="withoutSector"
          description="# w/o Sector"
          facet="SectorUsage"
        />
      </b-row>
      <span style="font-size: 18px; font-weight: bold">General</span>
      <b-row style="margin-bottom: 10px">
        <Card
          :kpi="withoutHosting"
          description="# w/o Hosting Tag"
          facet="Hosting"
        />
        <Card
          :kpi="withoutGlobalLocalTag"
          description="# w/o Global/Local Tag"
          facet="Provisioning"
        />
        <Card
          :kpi="withoutBusinessCriticality"
          description="# w/o Business Criticality"
          facet="BusinessCriticality"
        />
        <Card
          :kpi="withoutFunctionalFit"
          description="# w/o Functional Fit"
          facet="FunctionalFit"
        />
        <Card
          :kpi="withoutTechnicalFit"
          description="# w/o Technical Fit"
          facet="TechnicalFit"
        />
      </b-row>
      <span style="font-size: 18px; font-weight: bold"
        >Service Management & Compliance</span
      >
      <b-row style="margin-bottom: 10px">
        <Card
          :kpi="withoutBusinessService"
          description="# w/o Business Service"
          facet="BusinessService"
        />
        <Card
          :kpi="withoutRunCost"
          description="# w/o Run Cost"
          facet="RunCost"
        />
        <Card
          :kpi="withoutDataClassification"
          description="# w/o Data Classification"
          facet="DataClassification"
        />
        <Card
          :kpi="withoutDataPrivacy"
          description="# w/o Data Privacy"
          facet="DataPrivacy"
        />
        <Card
          :kpi="withoutGxpRelevance"
          description="# w/o GxP Relevance"
          facet="GxpRelevance"
        />
      </b-row>
      <span style="font-size: 18px; font-weight: bold"
        >Application Handover</span
      >
      <b-row>
        <Card
          :kpi="withoutFutureOrg"
          description="# w/o Future Org Tag"
          facet="FutureOrg"
        />
        <Card
          :kpi="withoutNewAppOwner"
          description="# w/o new App Owner/SDM"
          facet="NewAppOwner"
        />
        <Card
          :kpi="withoutHandover"
          description="# w/o Handover Status"
          facet="Handover"
        />
      </b-row>
    </b-col>
    <b-col cols="4">
      <AppTable :items="allFactSheets" />
    </b-col>
  </b-row>
</template>

<script>
/* eslint-disable */

import AppTable from "./AppTable";
import Card from "./Card";

export default {
  created() {
    this.$store.subscribe((mutation, state) => {
      this.render();
    });
  },
  computed: {
    withoutSDM() {
      return this.$store.state.factsheets.filter((fs) => fs.SDM === "N/A")
        .length;
    },
    withoutNewAppOwner() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.NewAppOwner === "N/A"
      ).length;
    },
    withoutHandover() {
      return this.$store.state.factsheets.filter((fs) => fs.Handover === "N/A")
        .length;
    },
    withoutDescription() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.Description === "N/A"
      ).length;
    },
    withoutHosting() {
      return this.$store.state.factsheets.filter((fs) => fs.Hosting === "N/A")
        .length;
    },
    withoutGlobalLocalTag() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.Provisioning === "N/A"
      ).length;
    },
    withoutSector() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.SectorUsage === "N/A"
      ).length;
    },
    withoutCountry() {
      return this.$store.state.factsheets.filter((fs) => fs.Country === "N/A")
        .length;
    },
    withoutBusinessCriticality() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.BusinessCriticality === "N/A"
      ).length;
    },
    withoutFunctionalFit() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.FunctionalFit === "N/A"
      ).length;
    },
    withoutTechnicalFit() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.TechnicalFit === "N/A"
      ).length;
    },
    withoutLifecycle() {
      return this.$store.state.factsheets.filter((fs) => fs.Lifecycle === "N/A")
        .length;
    },
    withoutBusinessCapability() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.DomainUsage === "N/A"
      ).length;
    },
    withoutFutureOrg() {
      return this.$store.state.factsheets.filter((fs) => fs.FutureOrg === "N/A")
        .length;
    },
    withoutDataPrivacy() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.DataPrivacy === "N/A"
      ).length;
    },
    withoutDataClassification() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.DataClassification === "N/A"
      ).length;
    },
    withoutGxpRelevance() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.GxpRelevance === "N/A"
      ).length;
    },
    withoutRunCost() {
      return this.$store.state.factsheets.filter((fs) => fs.RunCost === "N/A")
        .length;
    },
    withoutBusinessService() {
      return this.$store.state.factsheets.filter(
        (fs) => fs.BusinessService === "N/A"
      ).length;
    },
    allFactSheets() {
      return this.$store.state.factsheets;
    },
  },
  components: {
    AppTable,
    Card,
  },
  methods: {
    render() {
      this.key++;
    },
  },
  data() {
    return {
      key: 1,
    };
  },
};
</script>

<style></style>
