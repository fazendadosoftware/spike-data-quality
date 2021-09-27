import Vuex from 'vuex'
import Vue from 'vue'
import '@leanix/reporting' /* global lx */
import * as R from 'ramda'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    loading: true,
    factsheets: [],
    unfilteredSet: {},
    cards: {
      SDM: {
        isFiltered: false
      },
      Handover: {
        isFiltered: false
      },
      NewAppOwner: {
        isFiltered: false
      },
      Description: {
        isFiltered: false
      },
      Hosting: {
        isFiltered: false
      },
      Provisioning: {
        isFiltered: false
      },
      SectorUsage: {
        isFiltered: false
      },
      Country: {
        isFiltered: false
      },
      BusinessCriticality: {
        isFiltered: false
      },
      FunctionalFit: {
        isFiltered: false
      },
      TechnicalFit: {
        isFiltered: false
      },
      Lifecycle: {
        isFiltered: false
      },
      DomainUsage: {
        isFiltered: false
      },
      FutureOrg: {
        isFiltered: false
      },
      DataPrivacy: {
        isFiltered: false
      },
      DataClassification: {
        isFiltered: false
      },
      GxpRelevance: {
        isFiltered: false
      },
      RunCost: {
        isFiltered: false
      },
      BusinessService: {
        isFiltered: false
      }
    }
  },
  mutations: {
    filter () {
      const filterDataPrivacy = (data) => {
        if (!this.state.cards.DataPrivacy.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.DataPrivacy === 'N/A'
          })
        }
      }

      const filterDataClassification = (data) => {
        if (!this.state.cards.DataClassification.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.DataClassification === 'N/A'
          })
        }
      }

      const filterGxpRelevance = (data) => {
        if (!this.state.cards.GxpRelevance.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.GxpRelevance === 'N/A'
          })
        }
      }

      const filterRunCost = (data) => {
        if (!this.state.cards.RunCost.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.RunCost === 'N/A'
          })
        }
      }

      const filterSDM = (data) => {
        if (!this.state.cards.SDM.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.SDM === 'N/A'
          })
        }
      }

      const filterNewAppOwner = (data) => {
        if (!this.state.cards.NewAppOwner.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.NewAppOwner === 'N/A'
          })
        }
      }

      const filterDescription = (data) => {
        if (!this.state.cards.Description.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.Description === 'N/A'
          })
        }
      }

      const filterHosting = (data) => {
        if (!this.state.cards.Hosting.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.Hosting === 'N/A'
          })
        }
      }

      const filterProvisioning = (data) => {
        if (!this.state.cards.Provisioning.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.Provisioning === 'N/A'
          })
        }
      }

      const filterSectorUsage = (data) => {
        if (!this.state.cards.SectorUsage.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.SectorUsage === 'N/A'
          })
        }
      }

      const filterCountry = (data) => {
        if (!this.state.cards.Country.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.Country === 'N/A'
          })
        }
      }

      const filterBusinessCriticality = (data) => {
        if (!this.state.cards.BusinessCriticality.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.BusinessCriticality === 'N/A'
          })
        }
      }

      const filterFunctionalFit = (data) => {
        if (!this.state.cards.FunctionalFit.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.FunctionalFit === 'N/A'
          })
        }
      }

      const filterTechnicalFit = (data) => {
        if (!this.state.cards.TechnicalFit.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.TechnicalFit === 'N/A'
          })
        }
      }

      const filterLifecycle = (data) => {
        if (!this.state.cards.Lifecycle.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.Lifecycle === 'N/A'
          })
        }
      }

      const filterBusinessCapability = (data) => {
        if (!this.state.cards.DomainUsage.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.DomainUsage === 'N/A'
          })
        }
      }

      const filterFutureOrg = (data) => {
        if (!this.state.cards.FutureOrg.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.FutureOrg === 'N/A'
          })
        }
      }

      const filterBusinessService = (data) => {
        if (!this.state.cards.BusinessService.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.BusinessService === 'N/A'
          })
        }
      }

      const filterHandover = (data) => {
        if (!this.state.cards.Handover.isFiltered) {
          return data
        } else {
          return data.filter((fs) => {
            return fs.Handover === 'N/A'
          })
        }
      }

      const filterPipeline = R.pipe(
        filterHandover,
        filterDataPrivacy,
        filterDataClassification,
        filterGxpRelevance,
        filterRunCost,
        filterSDM,
        filterNewAppOwner,
        filterDescription,
        filterHosting,
        filterProvisioning,
        filterSectorUsage,
        filterCountry,
        filterBusinessCriticality,
        filterFunctionalFit,
        filterTechnicalFit,
        filterBusinessCapability,
        filterLifecycle,
        filterFutureOrg,
        filterBusinessService
      )
      this.state.factsheets = filterPipeline(this.state.unfilteredSet)
    },
    update (state, payload) {
      const buffer = []

      for (let x = 0; x < payload.length; x++) {
        const app = {}
        app.id = payload[x].id
        app.name = payload[x].displayName

        if (!payload[x].description) {
          app.Description = 'N/A'
        } else {
          app.Description = payload[x].description
        }

        if (!payload[x].dataPrivacyGDPR) {
          app.DataPrivacy = 'N/A'
        } else {
          app.DataPrivacy = payload[x].dataPrivacyGDPR
        }

        if (!payload[x].dataClassification) {
          app.DataClassification = 'N/A'
        } else {
          app.DataClassification = payload[x].dataClassification
        }

        if (!payload[x].gxpRelevance) {
          app.GxpRelevance = 'N/A'
        } else {
          app.GxpRelevance = payload[x].gxpRelevance
        }

        if (!payload[x].runCost) {
          app.RunCost = 'N/A'
        } else {
          app.RunCost = payload[x].runCost
        }

        if (payload[x].lifecycle === null) {
          app.Lifecycle = 'N/A'
        } else {
          app.Lifecycle = payload[x].lifecycle.asString
        }

        if (payload[x].businessCriticality === null) {
          app.BusinessCriticality = 'N/A'
        } else {
          app.BusinessCriticality = payload[x].businessCriticality
        }

        if (payload[x].functionalSuitability === null) {
          app.FunctionalFit = 'N/A'
        } else {
          app.FunctionalFit = payload[x].functionalSuitability
        }

        if (payload[x].technicalSuitability === null) {
          app.TechnicalFit = 'N/A'
        } else {
          app.TechnicalFit = payload[x].technicalSuitability
        }

        if (typeof payload[x].tags !== 'undefined') {
          for (let y = 0; y < payload[x].tags.length; y++) {
            if (
              payload[x].tags[y].tagGroup.name === 'Global/Local Classification'
            ) {
              app.Provisioning = payload[x].tags[y].name
            }
          }

          for (let y = 0; y < payload[x].tags.length; y++) {
            if (payload[x].tags[y].tagGroup.name === '2.1 Future Org') {
              app.FutureOrg = payload[x].tags[y].name
            }
          }

          for (let y = 0; y < payload[x].tags.length; y++) {
            if (payload[x].tags[y].tagGroup.name === 'Hosting') {
              app.Hosting = payload[x].tags[y].name
            }
          }

          for (let y = 0; y < payload[x].tags.length; y++) {
            if (payload[x].tags[y].tagGroup.name === '2.1.1 Handover') {
              app.Handover = payload[x].tags[y].name
            }
          }
        }

        if (typeof app.Hosting === 'undefined') {
          app.Hosting = 'N/A'
        }

        if (typeof app.Strategy === 'undefined') {
          app.Strategy = 'N/A'
        }

        if (typeof app.Provisioning === 'undefined') {
          app.Provisioning = 'N/A'
        }

        if (typeof app.FutureOrg === 'undefined') {
          app.FutureOrg = 'N/A'
        }

        if (typeof app.Handover === 'undefined') {
          app.Handover = 'N/A'
        }

        app.SDM = 'N/A'
        if (payload[x].subscriptions.edges.length) {
          for (let y = 0; y < payload[x].subscriptions.edges.length; y++) {
            if (payload[x].subscriptions.edges[y].node.roles) {
              if (payload[x].subscriptions.edges[y].node.roles) {
                for (
                  let i = 0;
                  i < payload[x].subscriptions.edges[y].node.roles.length;
                  i++
                ) {
                  if (
                    payload[x].subscriptions.edges[y].node.roles[i].name ===
                    'Service Delivery Manager'
                  ) {
                    app.SDM =
                      payload[x].subscriptions.edges[y].node.user.displayName
                  }
                }
              }
            }
          }
        }

        app.NewAppOwner = 'N/A'
        if (payload[x].subscriptions.edges.length) {
          for (let y = 0; y < payload[x].subscriptions.edges.length; y++) {
            if (payload[x].subscriptions.edges[y].node.roles) {
              if (payload[x].subscriptions.edges[y].node.roles) {
                for (
                  let i = 0;
                  i < payload[x].subscriptions.edges[y].node.roles.length;
                  i++
                ) {
                  if (
                    payload[x].subscriptions.edges[y].node.roles[i].name ===
                    'New Application Owner'
                  ) {
                    app.NewAppOwner =
                      payload[x].subscriptions.edges[y].node.user.displayName
                  }
                }
              }
            }
          }
        }

        app.SectorUsage = 'N/A'
        app.DomainUsage = 'N/A'
        app.Country = 'N/A'

        if (payload[x].relApplicationToBusinessService.edges.length) {
          app.BusinessService = 'HasBS'
        } else {
          app.BusinessService = 'N/A'
        }

        if (payload[x].relApplicationToBusinessCapability.edges.length) {
          // Parse business capabilities
          const bc = payload[
            x
          ].relApplicationToBusinessCapability.edges[0].node.factSheet.displayName.split(
            ' / '
          )
          app.DomainUsage = bc[0]

          for (
            let y = 0;
            y < payload[x].relApplicationToBusinessCapability.edges.length;
            y++
          ) {
            const bc = payload[x].relApplicationToBusinessCapability.edges[
              y
            ].node.factSheet.displayName.split(' / ')
            if (bc[0] !== app.DomainUsage) {
              app.DomainUsage = 'Multiple'
            }
          }
        }

        if (payload[x].relApplicationToUserGroup.edges.length) {
          // Parse User Groups

          for (
            let y = 0;
            y < payload[x].relApplicationToUserGroup.edges.length;
            y++
          ) {
            const ug = payload[x].relApplicationToUserGroup.edges[
              y
            ].node.factSheet.displayName.split(' / ')
            if (ug[0] === 'All') {
              if (app.SectorUsage === 'N/A') {
                app.SectorUsage = ug[1]
              }
              if (app.SectorUsage !== ug[1]) {
                app.SectorUsage = 'Multiple'
              }
            } else {
              app.Country = ug[0]
            }
          }
        } else {
          // console.log('Test')
        }
        buffer.push(app)
      }
      state.factsheets = buffer
      state.unfilteredSet = buffer
    }
  },
  actions: {
    init ({ commit }) {
      lx.init().then((setup) => {
        const config = {
          facets: [
            {
              key: 'app',
              fixedFactSheetType: 'Application',
              attributes: [
                'id',
                'displayName',
                'description',
                'technicalSuitability',
                'functionalSuitability',
                'businessCriticality',
                'runCost',
                'dataPrivacyGDPR',
                'dataClassification',
                'gxpRelevance',
                'lifecycle{asString}',
                'subscriptions{edges{node{id user{displayName} roles{id name}}}}',
                'relApplicationToUserGroup{edges{node{factSheet{displayName}}}}',
                'relApplicationToBusinessCapability{edges{node{factSheet{displayName}}}}',
                'relApplicationToBusinessService{edges{node{factSheet{displayName}}}}',
                'tags{name tagGroup{name}}'
              ],
              callback: function (data) {
                commit('update', data)
              }
            }
          ]
        }
        this.state.loading = false
        lx.ready(config)
      })
    }
  }
})

export default store
