import {useState, useEffect} from 'react';
import formatDate from '../common/Utils';
import useMessages from '../api/Sms';
import {getData, putData} from '../api/LocalStorage';

const BankTitles = ['VMAxisBk', 'VKAxisBk', 'VMHDFCBK'];

const checkMsgAddress = address => {
  var status = false;
  BankTitles.forEach(title => {
    if (address.toLowerCase().includes(title.toLowerCase())) {
      status = true;
    }
  });
  return status;
};

const useSpends = () => {
  console.log('use spends called');
  const [messages, smsApi] = useMessages();
  const oldtransactionsData = getData('@EMtransactionsData');
  const [transactionsData, setTransactionsData] = useState(oldtransactionsData);

  useEffect(() => {
    const getSpends = async () => {
      // making deep copy
      //const transactionDataClone = JSON.parse(JSON.stringify(transactionsData));
      const transactionDataClone = {};
      await messages.forEach(msg => {
        if (checkMsgAddress(msg.address)) {
          let rgxMatch = msg.body.match(/[RS|INR].?\s+([\d|,]+.?\d{1,2})/i);
          if (rgxMatch) {
            const spentDetails = {
              amount: parseInt(rgxMatch[1], 10) ? parseFloat(rgxMatch[1]) : 0,
              comment: msg.body,
              spentFrom: msg.address,
              spentAt: new Date(msg.date).toLocaleString(),
              dateSent: msg.date_sent,
            };
            const msgDate = formatDate(msg.date);
            if (msgDate in transactionDataClone) {
              transactionDataClone[msgDate].push(spentDetails);
            } else {
              transactionDataClone[msgDate] = [spentDetails];
            }
          }
        }
      });
      const spends = Object.entries(transactionDataClone).map(e => ({
        [e[0]]: e[1],
      }));
      setTransactionsData(spends);
    };
    getSpends();
  }, [messages]);

  return [transactionsData, setTransactionsData];
};

export default useSpends;
