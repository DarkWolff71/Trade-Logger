"use client";

import React from "react";
import { OGSidebar } from "@repo/ui";
import { useState } from "react";
const fmt = require("indian-number-format");

function page() {
  let [testInput, setTestInput] = useState<number>();
  let [testInput1, setTestInput1] = useState<string>();

  let [amountPerLotInput, setAmountPerLotInput] = useState<string>("10000");
  let [amountPerLotInputWarning, setAmountPerLotInputWarning] =
    useState<boolean>();

  let [initialCapitalInput, setInitialCapitalInput] =
    useState<string>("100000");
  let [initialCapitalInputWarning, setInitialCapitalInputWarning] =
    useState<boolean>();

  let [weeklyRoiInput, setWeeklyRoiInput] = useState<string>("2");
  let [weeklyRoiInputWarning, setWeeklyRoiInputWarning] = useState<boolean>();

  let [yearsInput, setYearsInput] = useState<string>("4");
  let [yearsInputWarning, setYearsInputWarning] = useState<boolean>();

  let [monthlyInvestmentInput, setMonthlyInvestmentInput] = useState<string>();
  let [monthlyInvestmentInputWarning, setMonthlyInvestmentInputWarning] =
    useState<boolean>();

  let capitalArray: number[] = [];
  let weeklyProfitArray: number[] = [];
  let monthlyProfitArray: number[] = [];

  if (
    weeklyRoiInput &&
    yearsInput &&
    initialCapitalInput &&
    amountPerLotInput &&
    !(
      amountPerLotInputWarning ||
      initialCapitalInputWarning ||
      weeklyRoiInputWarning ||
      yearsInputWarning
    )
  ) {
    let [years, weeklyRoi, initialCapital, amountPerLot] = [
      parseInt(yearsInput),
      parseFloat(weeklyRoiInput),
      parseFloat(initialCapitalInput),
      parseFloat(amountPerLotInput),
    ];
    let weeks = years * 52;
    let capitalNow = initialCapital;

    let monthlyProfit = 0;
    for (let i = 1; i <= weeks; i++) {
      let numberOfLots = Math.floor(capitalNow / amountPerLot);
      let profit = numberOfLots * amountPerLot * weeklyRoi * 0.01;

      weeklyProfitArray.push(profit);
      capitalNow += profit;
      capitalArray.push(capitalNow);

      // monthly
      monthlyProfit += profit;
      if (i % 4 === 0) {
        monthlyProfitArray.push(monthlyProfit);
        monthlyProfit = 0;
      }
    }
  }

  let validateNumber = (
    inputValue: string,
    numberType: string,
    variable: string,
    setVariable: React.Dispatch<React.SetStateAction<string | undefined>>
  ): void => {
    return;
  };

  return (
    <>
      <OGSidebar></OGSidebar>

      <div className="sm:ml-64">
        <h1 className="mt-4 mb-6 flex items-center justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200">
          ~ Visualiser ~
        </h1>
        <div className="mx-6">
          <span>Weekly ROI: </span>
          <input
            className={
              "text-white bg-gray-800 p-1 focus:border-2 rounded-md w-24 focus:outline-none focus:ring-0 " +
              (weeklyRoiInputWarning
                ? "focus:border-red-700"
                : "focus:border-green-400")
            }
            type="text"
            value={testInput1}
            onChange={(e) => {
              let inputValue = e.target.value;
              let num = parseFloat(inputValue);

              if (!isNaN(num)) {
                // Input is a valid number
                setWeeklyRoiInputWarning(false);
                setWeeklyRoiInput(String(num));
              } else {
                // Input is not a valid number
                setWeeklyRoiInputWarning(true);
                setWeeklyRoiInput(inputValue);
              }
            }}
          />

          <span className="ml-4">Initial Capital: ₹ </span>
          <input
            className={
              "text-white bg-gray-800 p-1 focus:border-2 rounded-md w-32 focus:outline-none focus:ring-0 " +
              (initialCapitalInputWarning
                ? "focus:border-red-700"
                : "focus:border-green-400")
            }
            type="text"
            value={testInput1}
            onChange={(e) => {
              let inputValue = e.target.value;
              let num = parseFloat(inputValue);

              if (!isNaN(num)) {
                // Input is a valid number
                setInitialCapitalInputWarning(false);
                setInitialCapitalInput(String(num));
              } else {
                // Input is not a valid number
                setInitialCapitalInputWarning(true);
                setInitialCapitalInput(inputValue);
              }
            }}
          />

          <span className="ml-4">Monthly Investment: ₹ </span>
          <input
            className={
              "text-white bg-gray-800 p-1 focus:border-2 rounded-md w-32 focus:outline-none focus:ring-0 " +
              (monthlyInvestmentInputWarning
                ? "focus:border-red-700"
                : "focus:border-green-400")
            }
            type="text"
            value={testInput1}
            onChange={(e) => {
              let inputValue = e.target.value;
              let num = parseFloat(inputValue);

              if (!isNaN(num)) {
                // Input is a valid number
                setMonthlyInvestmentInputWarning(false);
                setMonthlyInvestmentInput(String(num));
              } else {
                // Input is not a valid number
                setMonthlyInvestmentInputWarning(true);
                setMonthlyInvestmentInput(inputValue);
              }
            }}
          />

          <span className="ml-4">Amount per lot: ₹ </span>
          <input
            className={
              "text-white bg-gray-800 p-1 focus:border-2 rounded-md w-32 focus:outline-none focus:ring-0 " +
              (amountPerLotInputWarning
                ? "focus:border-red-700"
                : "focus:border-green-400")
            }
            type="text"
            value={testInput1}
            onChange={(e) => {
              let inputValue = e.target.value;
              let num = parseFloat(inputValue);

              if (!isNaN(num)) {
                // Input is a valid number
                setAmountPerLotInputWarning(false);

                setAmountPerLotInput(String(num));
              } else {
                // Input is not a valid number
                setAmountPerLotInputWarning(true);
                setAmountPerLotInput(inputValue);
              }
            }}
          />

          <div className="my-4">
            <span>No. of years: </span>
            <input
              className={
                "text-white bg-gray-800 p-1 focus:border-2 rounded-md w-32 focus:outline-none focus:ring-0 " +
                (yearsInputWarning
                  ? "focus:border-red-700"
                  : "focus:border-green-400")
              }
              type="text"
              value={testInput1}
              onChange={(e) => {
                let inputValue = e.target.value;
                let num = parseInt(inputValue);

                if (!isNaN(num)) {
                  // Input is a valid number
                  setYearsInputWarning(false);
                  setYearsInput(String(num));
                } else {
                  // Input is not a valid number
                  setYearsInputWarning(true);
                  setYearsInput(inputValue);
                }
              }}
            />
          </div>
          <div id="TABLE">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4 max-h-600 overflow-y-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 max-h-600 overflow-y-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Week
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Profit
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Current Capital
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weeklyProfitArray.map((profit, index) => {
                    return index % 2 ? (
                      <tr
                        key={String(index)}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <td className="px-6 py-4">
                          {fmt.formatFixed(index + 1)}
                        </td>
                        <td className="px-6 py-4">
                          {"₹ " + fmt.formatFixed(profit, 2)}
                        </td>
                        <td className="px-6 py-4">
                          {"₹ " + fmt.formatFixed(capitalArray[index], 2)}
                        </td>
                      </tr>
                    ) : (
                      <tr
                        key={String(index)}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <td className="px-6 py-4">
                          {fmt.formatFixed(index + 1)}
                        </td>
                        <td className="px-6 py-4">
                          {"₹ " + fmt.formatFixed(profit, 2)}
                        </td>
                        <td className="px-6 py-4">
                          {"₹ " + fmt.formatFixed(capitalArray[index], 2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default page;
