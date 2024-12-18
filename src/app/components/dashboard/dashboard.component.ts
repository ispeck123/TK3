import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  dashboardData: any = {
    siteDetail: {
      approvedSite: 0,
      activeSite: 0,
      expiredSite: 0,
      completedSite: 0
    },
    userDetail: {
      ccUser: 0,
      netsUser: 0,
      sgoUser: 0,
      wboUser: 0
    },
    aPSGTranDetail: {
      totalSC: 0,
      totalGE: 0,
      totalEToken: 0,
      bannedDriver: 0,
      scLast7days: 0,
      geLast7days: 0,
      eTokenLast7days: 0,
      bannedDriverLast7days: 0,
      last7DaysSCs: [
        {
          date: "2021-03-19",
          scQuantity: 0
        },
        {
          date: "2021-03-20",
          scQuantity: 0
        },
        {
          date: "2021-03-21",
          scQuantity: 0
        },
        {
          date: "2021-03-22",
          scQuantity: 0
        },
        {
          date: "2021-03-23",
          scQuantity: 1
        },
        {
          date: "2021-03-24",
          scQuantity: 0
        },
        {
          date: "2021-03-25",
          scQuantity: 0
        }
      ],
      last7DaysGEs: [
        {
          date: "2021-03-19",
          geQuantity: 0
        },
        {
          date: "2021-03-20",
          geQuantity: 0
        },
        {
          date: "2021-03-21",
          geQuantity: 0
        },
        {
          date: "2021-03-22",
          geQuantity: 0
        },
        {
          date: "2021-03-23",
          geQuantity: 0
        },
        {
          date: "2021-03-24",
          geQuantity: 0
        },
        {
          date: "2021-03-25",
          geQuantity: 0
        }
      ],
      last7DaysETokens: [
        {
          date: "2021-03-19",
          token: 0
        },
        {
          date: "2021-03-20",
          token: 0
        },
        {
          date: "2021-03-21",
          token: 0
        },
        {
          date: "2021-03-22",
          token: 0
        },
        {
          date: "2021-03-23",
          token: 0
        },
        {
          date: "2021-03-24",
          token: 0
        },
        {
          date: "2021-03-25",
          token: 0
        }
      ],
      last7DaysBannedDrivers: [
        {
          date: "2021-03-19",
          driver: 0
        },
        {
          date: "2021-03-20",
          driver: 0
        },
        {
          date: "2021-03-21",
          driver: 0
        },
        {
          date: "2021-03-22",
          driver: 0
        },
        {
          date: "2021-03-23",
          driver: 0
        },
        {
          date: "2021-03-24",
          driver: 0
        },
        {
          date: "2021-03-25",
          driver: 0
        }
      ]
    },
    tMSGTranDetail: {
      totalSC: 0,
      totalGE: 0,
      totalEToken: 0,
      bannedDriver: 0,
      scLast7days: 0,
      geLast7days: 0,
      eTokenLast7days: 0,
      bannedDriverLast7days: 0,
      last7DaysSCs: [
        {
          date: "2021-03-19",
          scQuantity: 0
        },
        {
          date: "2021-03-20",
          scQuantity: 0
        },
        {
          date: "2021-03-21",
          scQuantity: 0
        },
        {
          date: "2021-03-22",
          scQuantity: 0
        },
        {
          date: "2021-03-23",
          scQuantity: 1
        },
        {
          date: "2021-03-24",
          scQuantity: 0
        },
        {
          date: "2021-03-25",
          scQuantity: 0
        }
      ],
      last7DaysGEs: [
        {
          date: "2021-03-19",
          geQuantity: 0
        },
        {
          date: "2021-03-20",
          geQuantity: 0
        },
        {
          date: "2021-03-21",
          geQuantity: 0
        },
        {
          date: "2021-03-22",
          geQuantity: 0
        },
        {
          date: "2021-03-23",
          geQuantity: 0
        },
        {
          date: "2021-03-24",
          geQuantity: 0
        },
        {
          date: "2021-03-25",
          geQuantity: 0
        }
      ],
      last7DaysETokens: [
        {
          date: "2021-03-19",
          token: 0
        },
        {
          date: "2021-03-20",
          token: 0
        },
        {
          date: "2021-03-21",
          token: 0
        },
        {
          date: "2021-03-22",
          token: 0
        },
        {
          date: "2021-03-23",
          token: 0
        },
        {
          date: "2021-03-24",
          token: 0
        },
        {
          date: "2021-03-25",
          token: 0
        }
      ],
      last7DaysBannedDrivers: [
        {
          date: "2021-03-19",
          driver: 0
        },
        {
          date: "2021-03-20",
          driver: 0
        },
        {
          date: "2021-03-21",
          driver: 0
        },
        {
          date: "2021-03-22",
          driver: 0
        },
        {
          date: "2021-03-23",
          driver: 0
        },
        {
          date: "2021-03-24",
          driver: 0
        },
        {
          date: "2021-03-25",
          driver: 0
        }
      ]
    },
    pendingApprovalDetail: {
      pendingInitialApproval: 0,
      pendingJSApproval: 0,
      pendingAcknowledgeApproval: 0,
      pendingCondidtionalApproval: 0,
      pendingSoilTestApproval: 0,
      pendingVTSApproval: 0,
      pendingAERApproval: 0,
      pendingBGDischargeApproval: 0
    }
  };

  constructor(){

  }

  ngOnInit(): void {
   

  }

}
