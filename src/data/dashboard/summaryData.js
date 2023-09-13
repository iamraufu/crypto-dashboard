import walletIcon from '../../images/dashboard/wallet.png'
import btcIcon from '../../images/dashboard/btc.png'
import ethIcon from '../../images/dashboard/eth.png'
import solIcon from '../../images/dashboard/sol.png'
import btcSpark from '../../images/dashboard/btc.svg'
import ethSpark from '../../images/dashboard/eth.svg'
import solSpark from '../../images/dashboard/sol.svg'

const summaryData = [
      {
            image: walletIcon,
            title: "Estimated Balance",
            name: "",
            amount: "$123,987",
            type: "Monthly Profit",
            value1: "+$2560.78",
            value2: "+14.67%",
            data: [],
            strokeColor: '',
            sparkImage: "",
      },
      {
            image: btcIcon,
            title: "BTCUSDT",
            name: "Bitcoin",
            amount: "$23,738",
            type: "PNL Daily",
            value1: "-$16.78",
            value2: "+14.67%",
            data: [
                  5, 2, 3, 1, 4, 4.5, 6, 5.5, 5.75, 8
            ],
            strokeColor: 'rgba(240, 201, 140, 1)',
            sparkImage: btcSpark
      },
      {
            image: ethIcon,
            title: "ETHUSDT",
            name: "Ethereum",
            amount: "$23,738",
            type: "PNL Daily",
            value1: "+$189.91",
            value2: "+24.68%",
            data: [
                  5, 2, 3, 1, 4, 4.5, 6, 5.5, 5.75, 8
            ],
            strokeColor: 'rgba(145, 129, 219, 1)',
            sparkImage: ethSpark
      },
      {
            image: solIcon,
            title: "SOLUSDT",
            name: 'Solana',
            amount: "$23,738",
            type: "PNL Daily",
            value1: "+$556.14",
            value2: "+64.11%",
            data: [
                  5, 2, 3, 1, 4, 4.5, 6, 5.5, 5.75, 8
            ],
            strokeColor: 'rgba(240, 160, 160, 1)',
            sparkImage: solSpark
      }
]

export default summaryData;