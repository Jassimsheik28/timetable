import App from "./App";
import Header from "./Header";
function Bsh({
  CollegeTimings,
  setCollegeTimings,
  facultytimings,
  setfacultytimings,
  CollegeSubjects,
  setCollegeSubjects,
  selectedOption,
  setselectedOption,
  LowerTableData,
  setLowerTableData,
  randompicker,
}) {
  return (
    <>
    <Header />
    <div className="brachContainer">
      <div>
        <App
          CollegeTimings={CollegeTimings}
          setCollegeTimings={setCollegeTimings}
          facultytimings={facultytimings}
          setfacultytimings={setfacultytimings}
          CollegeSubjects={CollegeSubjects}
          setCollegeSubjects={setCollegeSubjects}
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
          LowerTableData={LowerTableData}
          setLowerTableData={setLowerTableData}
          randompicker={randompicker}
          Year="BSH"
        />
      </div>
    </div>
    </>
  );
}

export default Bsh;
