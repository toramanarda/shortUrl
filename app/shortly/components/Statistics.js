const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statisticsBanner">
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="itemArea">
        <div className="statisticsItem">
          <div className="iconRecognition"></div>
          <div className="statisticsItemContent">
            <h1>Brand Recognition</h1>
            <p>Boost your brand recognition with each click. Generic links don&apos;t mean a thing.</p>
          </div>
        </div>
        <div className="statisticsItem">
          <div className="iconRecognitionDetailed"></div>
          <div className="statisticsItemContent">
            <h1>Detailed Records</h1>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
        </div>
        <div className="statisticsItem">
          <div className="iconRecognitionFully"></div>
          <div className="statisticsItemContent">
            <h1>Fully Customizable</h1>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
