import SmsAndroid from 'react-native-get-sms-android';

const BankTitles = ['VMAxisBk', 'VKAxisBk', 'VMHDFCBK'];

var totalSpends = 0;

const getSpends = async filters => {
  console.log('above list');

  await SmsAndroid.list(
    JSON.stringify({minDate: filters.minDate, maxDate: filters.maxDate}),

    err => {
      console.log('Failed with error: ', err);
    },

    (count, smsList) => {
      console.log('outer scopeeeeeeeeeeee', totalSpends);
      JSON.parse(smsList).forEach(msg => {
        if (BankTitles.includes(msg.address)) {
          let rgxMatch = msg.body.match(/[RS|INR].?\s+(\d+.?\d{1,2})/i);
          totalSpends += parseInt(rgxMatch[1], 10)
            ? parseFloat(rgxMatch[1])
            : 0;
        }
      });
    },
  );

  console.log('okkkkk', totalSpends);

  return 0;
};

export default getSpends;
