const formatDate = timestamp => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateObj = new Date(timestamp);
  return [
    dateObj.getDate(),
    months[dateObj.getMonth()],
    dateObj.getFullYear(),
  ].join(' ');
};

export default formatDate;
