// not yet integrated

import {getData, putData} from '../api/LocalStorage';

const useLastOpenedTime = () => {
  const getLastOpenedTime = async () => {
    const lastOpenedTime = await getData('@EMlastOpened');
    return lastOpenedTime;
  };

  const updateLastOpenedTime = appState => {
    let date = new Date().getTime();
    if (['inactive', 'background'].includes(appState)) {
      putData('@EMlastOpened', date);
      console.log('Dashboard: data saved');
    }
  };

  return [getLastOpenedTime, updateLastOpenedTime];
};

export default useLastOpenedTime;
