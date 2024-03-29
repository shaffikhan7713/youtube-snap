import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { QUERY_SEARCH_DATA, VIDEO_SUGGESTION_URL } from "../utils/constants";
import {
  addGlobalSearchText,
  addSearchVideos,
  cacheResults,
} from "../utils/searchSlice";

export const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search.autoSuggestCacheData);

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getAutosuggestResults();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getAutosuggestResults = async () => {
    if (searchQuery.trim() === "") return;

    try {
      const data = await fetch(VIDEO_SUGGESTION_URL + searchQuery);
      const jsonData = await data.json();
      console.log("jsonData", jsonData);
      // setSuggestions(jsonData[1]);
      setSuggestions(jsonData[1]);

      //update cache
      dispatch(
        cacheResults({
          [searchQuery]: jsonData[1],
        })
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleSearchSelect = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    dispatch(addGlobalSearchText(suggestion));
    getQueryVideos(suggestion);
  };

  const getQueryVideos = async (suggestion) => {
    if (!suggestion) return;
    const searchData = await fetch(QUERY_SEARCH_DATA + suggestion);
    const jsonSearchData = await searchData.json();
    console.log("jsonSearchData", jsonSearchData);
    dispatch(addSearchVideos(jsonSearchData.items));
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleHandler()}
          className="h-8 cursor-pointer"
          alt="hamburger"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
        />
        <img
          className="h-9 mx-2"
          alt="logo-icon"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 pl-4 rounded-l-full"
            type="text"
            placeholder="🔍 Enter search text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full bg-gray-100 px-5 py-2">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <ul className="bg-white py-2 px-5 w-[36rem] shadow-lg rounded-lg border-gray-100 absolute">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="py-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSearchSelect(suggestion)}
              >
                🔍 {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-con"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};
