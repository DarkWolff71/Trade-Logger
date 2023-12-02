"use client";

import React, { useState } from "react";
import { FullWidthBg } from "..";
import { SearchBar } from "../SearchBar";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export function SearchForNewFriends() {
  let [resultsFound, setResultsFound] = useState<boolean>(true);
  let [searchResult, setSearchResult] = useState<any[]>([]);

  let handleSubmit = (input: string) => {
    console.log("fsdfdsf");
    if (!input) return;
    let searchResultFromDb: any[] = []; // Make the db query;
    if (searchResultFromDb.length === 0) {
      setResultsFound(false);
    }
    setSearchResult(searchResultFromDb);
    console.log(!resultsFound);
  };
  return (
    <>
      <FullWidthBg>
        <div className="my-2 flex flex-col justify-center items-center">
          <SearchBar
            className="max-w-[500px] min-w-[500px]"
            placeHolder="Search for new friends..."
            handleSubmit={handleSubmit}
          ></SearchBar>

          {!resultsFound ? (
            <p
              id="filled_error_help"
              className="mt-2 text-xs text-red-600 dark:text-red-400"
            >
              <span className="font-medium">Oh, snapp!</span> No results found.
            </p>
          ) : (
            <></>
          )}
        </div>
      </FullWidthBg>
      {searchResult.length > 0 ? (
        <>
          <FullWidthBg>
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Close Friends
            </p>
          </FullWidthBg>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
