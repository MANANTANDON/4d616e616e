import React, { useState, useMemo } from "react";
// import SidebarToggle from "../common/SidebarToggle";
// import { useSelector, useDispatch } from "react-redux";
// import Header from "../common/Header";
// import { useGetCountryRankingDataMutation } from "../api/endpoints/countryMetricsApi";
import response from "@/utils/countryres.json";

const processCountryData = (data) => {
  const uniqueCountriesMap = new Map();
  data.forEach((item) => {
    // Determine a unique ID for the country
    const id = item.patientAccess.countryId;

    if (uniqueCountriesMap.has(id)) {
      // Merge data for the same country ID
      const existing = uniqueCountriesMap.get(id);
      const mergedItem = { ...existing };
      for (const sectionKey in item) {
        if (item.hasOwnProperty(sectionKey)) {
          mergedItem[sectionKey] = {
            ...existing[sectionKey],
            ...item[sectionKey],
          };
        }
      }
      uniqueCountriesMap.set(id, mergedItem);
    } else {
      uniqueCountriesMap.set(id, item);
    }
  });

  return Array.from(uniqueCountriesMap.values()).map((item, index) => {
    // Pulling the overallScore directly from the data (using patientAccess section)
    let overallScore = item.patientAccess.overallScore;

    // Format the score: if null/undefined, show blank, otherwise show as a percentage
    const percentage =
      overallScore === null || overallScore === undefined
        ? ""
        : `${overallScore}%`;

    return {
      country: item.patientAccess.countryName,
      percentage: percentage, // Uses the overallScore key value
      color: index % 2 === 0 ? "#EDFFF1" : "#FFFFFF",
      id: item.patientAccess.countryId,
      data: item,
    };
  });
};

const generateAllDynamicTables = (countries) => {
  if (countries.length === 0) return [];

  const firstCountryData = countries[0].data;
  const tableData = [];
  // Exclude these keys from dynamic columns as they are already displayed or for internal use
  const keysToIgnore = ["countryName", "countryId", "overallScore"];

  for (const sectionKey in firstCountryData) {
    if (
      firstCountryData.hasOwnProperty(sectionKey) &&
      typeof firstCountryData[sectionKey] === "object" &&
      firstCountryData[sectionKey] !== null
    ) {
      const rawKeys = Object.keys(firstCountryData[sectionKey]).filter(
        (key) => !keysToIgnore.includes(key)
      );

      const headers = rawKeys.map((key) =>
        key
          .replace(/([A-Z])/g, " $1")
          .toUpperCase()
          .trim()
      );

      const editableColumns = rawKeys.map((key) => {
        return sectionKey === "drugAccess" && key === "gpiData";
      });

      const rows = countries.map((country, countryIndex) => {
        const rowValues = [];
        rawKeys.forEach((key) => {
          let value = country.data[sectionKey][key];
          value = value === null || value === undefined ? "N/A" : value;
          rowValues.push(value);
        });

        rowValues.push(countryIndex % 2 === 0 ? "#EDFFF1" : "#FFFFFF");
        return rowValues;
      });

      tableData.push({
        title: sectionKey
          .replace(/([A-Z])/g, " $1")
          .toUpperCase()
          .trim(),
        headers: headers,
        rows: rows,
        editableColumns: editableColumns, // Pass the new column-level editability array
        totalColumns: rawKeys.length,
      });
    }
  }

  return tableData;
};

const TableComponent = ({
  title,
  rowsData,
  headers,
  editableColumns,
  totalColumns,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_VISIBLE_COLUMNS = 5;
  const MIN_VISIBLE_COLUMNS = 1;

  const visibleColumns = isExpanded
    ? Math.min(totalColumns, MAX_VISIBLE_COLUMNS)
    : Math.min(totalColumns, MIN_VISIBLE_COLUMNS);

  const showExpandButton = totalColumns > MIN_VISIBLE_COLUMNS;

  const columnWidth = 300;
  const tableWidth = visibleColumns * columnWidth;

  const numberedHeaders = headers.map(
    (header, index) => `# ${index + 1} ${header}`
  );

  return (
    <div
      className="border-r-0 border-b-0 border-t-0 border-l border-[#BEB9B5] shrink-0 h-fit"
      style={{
        borderRightWidth: "0.5px",
        borderLeftWidth: "0.5px",
        width: `${tableWidth}px`,
      }}
    >
      <div className="sticky top-0">
        {/* Table Header Section */}
        <div className="bg-[#DDD8D4] text-center pl-[5px] pr-[15px] py-[5px] flex flex-row justify-between items-center border-b border-[#CDC9C6]">
          {/* Placeholder for section weight input */}
          <input
            placeholder="0%"
            className="border-2 border-dashed border-[#BEBAB7] bg-[#FFFFFF] px-[14px] py-[9px] rounded-[10px] w-[68px] outline-0 text-center text-[#AE5A58] font-semibold"
          />
          <div className="font-semibold text-gray-700">{title}</div>

          {/* Expand/Collapse Button */}
          {showExpandButton ? (
            <button
              className="cursor-pointer font-semibold text-xl w-[68px] flex justify-end text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "−" : "+"}
            </button>
          ) : (
            <div className="w-[68px]" />
          )}
        </div>

        {/* Dynamic Headers Row */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${visibleColumns}, ${columnWidth}px)`,
          }}
        >
          {/* Slice the headers to only show the visible number */}
          {numberedHeaders.slice(0, visibleColumns).map((header, index) => (
            <div
              key={index}
              className="bg-[#EDE9E6] text-left flex flex-col justify-center py-2.5 px-[15px] text-[14px] h-[60px] font-semibold text-gray-600 border border-l-0 border-b-0 border-t-0 border-r-[#CDC9C6]"
            >
              {header}
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Data Rows */}
      {rowsData.map((row, key) => {
        const rowColor = row[row.length - 1];
        const dataValues = row.slice(0, row.length - 1);

        const valuesToRender = dataValues.slice(0, visibleColumns);

        return (
          <div
            className="grid"
            key={key}
            style={{
              gridTemplateColumns: `repeat(${visibleColumns}, ${columnWidth}px)`,
            }}
          >
            {valuesToRender.map((value, colIndex) => {
              const isLastVisibleColumn = colIndex === visibleColumns - 1;
              const isCellEditable = editableColumns[colIndex];

              return (
                <div
                  key={colIndex}
                  className={`p-[12px] border-l-0 border-b-0 border-t-0 whitespace-nowrap overflow-hidden text-ellipsis text-gray-800 text-[14px] ${
                    !isLastVisibleColumn ? "border-r-[#CDC9C6]" : "border-r-0"
                  }`}
                  style={{ backgroundColor: rowColor }}
                >
                  {/* Conditional rendering based on isCellEditable */}
                  {isCellEditable ? (
                    <input
                      type="text"
                      defaultValue={value?.toString() || ""}
                      className="w-full outline-none bg-transparent focus:ring-1 focus:ring-indigo-500 rounded-sm px-1 -mx-1"
                    />
                  ) : (
                    value
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default function CountryMetrics() {
  const [showInputSelections, setShowInputSelections] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [apiData, setApiData] = useState(response);

  const filters = [
    "Patient Access",
    "Site Access",
    "Country Performance",
    "Country Experience",
    "Startup Timelines",
    "Country Cost",
  ];

  const scoreRanges = [
    "Overall Score",
    "Patient/Site Access Score",
    "Drug Access Socre",
    "Country Performance Socre",
    "Country Experience Socre",
    "Start-up Socre",
  ];
  //   const selectedOpportunityId = useSelector(
  //     (state) => state.createdOpportunityKey.createdOpportunityKey
  //   );
  //   //const {getCountryMetricsData}=useGetCountryRankingDataMutation()
  //   const [getCountryMetrics, { data, isLoading, isSuccess }] =
  //     useGetCountryRankingDataMutation();

  //   useEffect(() => {
  //     getCountryMetrics({
  //       payload: {
  //         opporKey: 3139,
  //         ageStart: 0,
  //         ageEnd: 104,
  //         urbanModifier: true,
  //         incidencePrevalenceType: "Incidence",
  //         gpiDataPerCountry: {},
  //         ePROscore: true,
  //         eConsentScore: true,
  //         mobileNursingScore: true,
  //         dtP_IP_Score: true,
  //         telemedicineScore: true,
  //         regulation: "CTR",
  //         timeline: "PhI-III",
  //         indication: "Average",
  //         patientSiteAccessWeight: 0,
  //         drugAccessWeight: 0,
  //         countryPerformanceWeight: 0,
  //         countryExperienceWeight: 0,
  //         startUpWeight: 0,
  //         costScoreWeight: 0,
  //         selectedRegions: [],
  //         selectedCountries: [],
  //       },
  //     }).then((res) => {
  //       console.log("Hi+++++", res);
  //       setApiData(res?.data);
  //     });
  //   }, []);
  //setApiData(res?.data)
  const processedCountries = processCountryData(apiData);

  const dynamicTables = useMemo(
    () => generateAllDynamicTables(processedCountries),
    [processedCountries]
  );

  return (
    <div className="container mx-auto max-w-[1440px] text-sm">
      {/* <Header showUserControls={false} /> */}

      <div className="flex w-full overflow-hidden border border-[#DFD9D9] bg-[#F9F5F1]">
        <div className="bg-[#F9F5F1] border-r border-[#DFD9D9] pt-[2px]">
          {/* <SidebarToggle /> */}
        </div>
        <div className="relative flex-1 overflow-y-auto p-6 transition-all duration-300">
          <div className="border border-[#F9F6F1] p-6 font-sans">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold mb-6 text-gray-800">
                Country Scoring Dashboard
              </div>
              <div>
                <button
                  onClick={() => setOpenFilter(!openFilter)}
                  className="border border-zinc-200 bg-zinc-100 p-3 rounded-2xl"
                >
                  Filters
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 border border-[#DCD8D5] shadow-xl overflow-hidden ">
              <div className="rounded-[11px] flex flex-row overflow-x-auto border border-[#DCD8D5] h-[500px] overflow-y-scroll custom-scrollbar">
                {/* Fixed Country/Overall Score Column */}
                <div className="bg-[#F4F3F1] text-center w-[230px] h-fit shrink-0 sticky left-0  shadow-xl/30 border-t-0 border-l-0 border-b-0 z-10">
                  {/* WEIGHT HEADER */}
                  <div className="sticky top-0">
                    <div className="text-center p-[16px] font-semibold text-gray-700 bg-[#E8E8E8] border-b border-[#CDC9C6]">
                      WEIGHT
                    </div>

                    {/* COUNTRY / OVER ALL SCORE HEADERS */}
                    <div className="grid grid-cols-2">
                      <div className="col-span-1 bg-[#EDE9E6] text-center flex justify-center items-center text-[14px] h-[60px] font-semibold text-gray-600 border-r border-[#CDC9C6]">
                        COUNTRY
                      </div>
                      <div className="col-span-1 bg-[#EDE9E6] text-center flex justify-center items-center text-[14px] h-[60px] font-semibold text-gray-600">
                        OVER ALL SCORE
                      </div>
                    </div>
                  </div>

                  {/* COUNTRY DATA ROWS */}
                  {processedCountries.map((item, key) => (
                    <div className="grid grid-cols-2" key={key}>
                      <div
                        className="col-span-1 p-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-left pl-4 border-r border-[#CDC9C6]"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.country}
                      </div>
                      <div
                        className="col-span-1 text-center text-[#AE5A58] font-bold p-[12px] whitespace-nowrap overflow-hidden text-ellipsis "
                        style={{ backgroundColor: item.color }}
                      >
                        {item.percentage}
                        {/* Displays the score from the JSON data */}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dynamic Table Columns */}
                <div className="flex flex-row relative">
                  {dynamicTables.map((table, index) => (
                    <TableComponent
                      key={index}
                      title={table.title}
                      rowsData={table.rows}
                      headers={table.headers}
                      editableColumns={table.editableColumns} // Passing the new prop
                      totalColumns={table.totalColumns}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-30 top-38 z-20">
          {openFilter && (
            <div className="flex items-center justify-center my-5">
              <div className="w-[280px] rounded-[8px] h-fit max-h-[550px] overflow-y-auto bg-[#F9F6F1] border border-[#D7DAD3] px-[20px] py-[30px]">
                <div className="flex items-center justify-between border border-b-[#EDEAE5] border-t-0 border-l-0 border-r-0 pb-2">
                  <div className="text-base font-semibold">Filters</div>
                  <button
                    className="text-base font-semibold cursor-pointer"
                    onClick={() => setOpenFilter(false)}
                  >
                    x
                  </button>
                </div>
                <div className="my-3">
                  <div>Select Region</div>
                  <select className="bg-[#FFFFFF] w-full p-2.5 rounded-[7px] mt-1 border border-[#EAE9E7] outline-0">
                    <option value="1">All</option>
                    <option value="2">4d616e616e</option>
                  </select>
                </div>
                <div className="my-3">
                  <div>Select Country</div>
                  <select className="bg-[#FFFFFF] w-full p-2.5 rounded-[7px] mt-1 border border-[#EAE9E7] outline-0">
                    <option value="1">All</option>
                    <option value="2">4d616e616e</option>
                  </select>
                </div>
                <div className="border border-b-[#EAE9E7] border-t-[#EAE9E7] border-l-0 border-r-0 my-3">
                  <div
                    onClick={() => setShowScores(!showScores)}
                    className="flex flex-row items-center justify-between py-2.5 cursor-pointer"
                  >
                    <div className="font-semibold">Scores</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={`bi bi-chevron-down transition-transform ${
                          showScores ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  </div>
                  {showScores && (
                    <div className="my-3">
                      {scoreRanges.map((item, key) => (
                        <div
                          className="my-2 flex flex-col items-start justify-between "
                          key={key}
                        >
                          <div className="font-semibold">{item}</div>
                          <input
                            type="range"
                            className="range-style w-full my-2"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className="my-3 flex flex-row items-center justify-between cursor-pointer"
                  onClick={() => setShowInputSelections(!showInputSelections)}
                >
                  <div className="font-semibold">Input Selections</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`bi bi-chevron-down transition-transform ${
                        showInputSelections ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                </div>
                {showInputSelections && (
                  <div className="my-3 border border-r-0 border-l-0 border-t-0 border-b-[#EDEAE5]">
                    {filters.map((item, key) => (
                      <div
                        className="my-2 flex flex-row items-center justify-between"
                        key={key}
                      >
                        <div className="font-normal">{item}</div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <button className="bg-[#FFFFFF] py-[12px] px-[20px] rounded-[50px] border-1 border-zinc-900 text-zinc-900 cursor-pointer font-semibold">
                    Clear
                  </button>
                  <button className="bg-zinc-900 py-[12px] px-[20px] rounded-[50px] border-1 border-zinc-900 text-zinc-100 cursor-pointer font-semibold">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
