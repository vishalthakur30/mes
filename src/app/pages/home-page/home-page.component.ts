import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/_common/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public lineChartOptions:any = {
    series: [
      {
        name: "Sales",
        data: [10, 41, 35, 51, 49, 62, 69]
      },
      {
        name: "Sales",
        data: [0, 31, 25, 41, 39, 42, 59]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    annotations: {
      yaxis: [
        {
          y: 18,
          borderColor: "var(--app-light-grey)",
          borderWidth: 2,
          borderStyle: 'dashed',
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396"
            },
          }
        },
      ],
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      colors: ['var(--app-purple)', 'var(--app-dark-grey)'],
      width: 2,
      dashArray: [0, 8, 5]
    },
    grid: {
      padding: {
        right: 30,
        left: 20
      }
    },
    xaxis: {
      categories: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ]
    }
  };
  public barChartOptions:any = {
    series: [
      {
        name: "Income",
        data: [40, 120, 60, 25, 20, 95,25,5,60,140,80,40],
        color: 'var(--app-dark-purple)',
      },
      {
        name: "Borrow",
        data: [20, 60, 30, 25, 20, 20,25,5,30,40,15,10],
        color:  'var(--app-light-purple)',
      },
    ],
    
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    responsive: [
      {
        breakpoint: 480,
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        colors: {
          backgroundBarColors: [],
      },
        legend: {
          position: "top",
          offsetY: 40
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],

    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      colors: [ 'var(--app-dark-purple)', 'var(--app-light-purple)'],
    }
  };
  public pieChartOptions: any = {
    series: [100, 45, 60],
    chart: {
      type: "donut",
      border: 0,
      margin:0,
      padding:0,
      total: {
        showAlways: true,
        show: true
      }
    },
    labels: ["Men", "Electronics", "Women"],
    dataLabels: {
      enabled: false,

    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true
            },
          }
        }
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      itemMargin: {
        horizontal: 20,
        vertical: 20
      },
    },
    colors: ['var(--app-purple)', 'var(--app-dark-purple)', 'var(--app-light-purple)'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  private subscription: Subscription = new Subscription();
  isLoading: boolean = false;
  newUserList: any = [];
  recentOrderList: any = [];
  topCards: any = [];
  icons = [
    'assets/icons/music.svg',
    'assets/icons/pieChart.svg',
    'assets/icons/download.svg',
    'assets/icons/refresh.svg',
  ];
  constructor(
    private apiService: ApiService
  ) {

  }
  ngOnInit(): void {
    this.barChartOptions['plotOptions']['bar']['columnWidth'] = '25%';
    this.getData();
  }

  getData() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.subscription.add(
      this.apiService.get('https://1.api.fy23ey05.careers.ifelsecloud.com/').subscribe({
        next: (data) => {
          if (data) {
            this.newUserList = data.new_users && data.new_users.length ? data.new_users : [];
            this.recentOrderList = data.recent_orders && data.recent_orders.length ? data.recent_orders : [];
            this.topCards = data.top_cards && data.top_cards.length ? data.top_cards : [];
            this.topCards.map((el: any, i: any) => {
              el.url = this.icons[i];
            })
          }
          this.isLoading = false;
        }, error: error => {
          this.isLoading = false;
        }
      })
    );
  }

  trackByFn(index: number, item: any): number {
    item.id = 'card' + index;
    return item.id;
  }
  ngOnDestroy(): void {

  }
}
