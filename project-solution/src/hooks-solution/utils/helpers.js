export const prepareCourse = (courseData) => {
  let { id } = courseData;
  if (!id) {
    id = Math.floor(Math.random() * 1000).toString(10); // Random id
  }
  const newPrice = {
    early_bird: parseInt(courseData.price.early_bird, 10),
    normal: parseInt(courseData.price.normal, 10),
  };

  return { ...courseData, id, price: newPrice };
};

const getNewDates = (dateType, value, currentDates) => ({
  start_date: dateType === "start-date" ? value : currentDates.start_date,
  end_date: dateType === "end-date" ? value : currentDates.end_date,
});

const getNewPrice = (priceType, value, currentPrice) => ({
  early_bird: priceType === "early-bird" ? value : currentPrice.early_bird,
  normal: priceType === "normal" ? value : currentPrice.normal,
});

export const getNewfield = (course, { name, value = "", checked }) => {
  switch (name) {
    case "open":
      return { [name]: !course.open };
    case "start-date":
      return { dates: getNewDates("start-date", value, { ...course.dates }) };
    case "end-date":
      return { dates: getNewDates("end-date", value, { ...course.dates }) };
    case "early-bird":
      return { price: getNewPrice("early-bird", value, { ...course.price }) };
    case "normal":
      return { price: getNewPrice("normal", value, { ...course.price }) };
    case "instructors":
      if (checked) {
        return { instructors: [...course.instructors, value] };
      } else {
        return {
          instructors: [...course.instructors].filter(
            (instructorID) => instructorID !== value
          ),
        };
      }
    default:
      return { [name]: value };
  }
};
