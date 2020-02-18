import SmsAndroid from 'react-native-get-sms-android';
import {useState, useEffect} from 'react';

const BankTitles = ['VMAxisBk', 'VKAxisBk', 'VMHDFCBK'];
var currentTimeStamp = new Date().getTime();
var todayStartTimestamp = new Date(currentTimeStamp).setHours(0, 0, 0);

var testDate = new Date(2020, 1, 1, 0, 0, 0).getTime();

const useMessages = () => {
  const [messages, setMessages] = useState([]);

  const smsApi = async filters => {
    await SmsAndroid.list(
      JSON.stringify({
        minDate: testDate,
        maxDate: currentTimeStamp,
        bodyRegex: '(.*)debited(.*)',
      }),
      err => {
        console.log('Failed with error: ', err);
      },
      (count, smsList) => {
        setMessages(JSON.parse(smsList));
      },
    );
  };

  useEffect(() => {
    smsApi();
  }, []);
  return [smsApi, messages];
};

export default useMessages;
