import { useEffect, useState } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"
import { FaSearch } from "react-icons/fa";

export default function Shop() {

  const [apiResponse, setApiResponse] = useState();
  const [sets, setSets] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://api.magicthegathering.io/v1/sets")
    .then(response => response.json())
    .then(response => {
      setApiResponse(response.sets);
      setSets(response.sets);
    })
    .catch(err => console.log(err))
  }, []);

  const searchSets = (query, array) => {
    return array.filter(element => element.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setSets(searchSets(e.target.value, apiResponse));
  }

  return (
    <ShopDiv>
      <SearchBar type="search" placeholder="Search Sets" onChange={handleSearchInputChange} value={searchInput} />
      <FaSearch color="#777"/>
      <SideBar>
        <SimpleBar style={{maxHeight: "80vh", width: "15vw"}}>
          {sets
            ? sets.map(set => <SetSelector>{set.name}</SetSelector>)
            : <span>loading</span>}
        </SimpleBar>
      </SideBar>
    </ShopDiv>
  )
}

const ShopDiv = styled.div`

  position: relative;

  svg {
    position: absolute;
    top: 2.6vh;
    left: 2rem;
  }
`

const SideBar = styled.aside`
  height: 81vh;
  width: 15vw;
  margin-left: 1rem;
  margin-top: 2vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: rgb(47, 13, 68, 0.6);
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const SearchBar = styled.input`
  margin-left: 1.5rem;
  margin-top: 2vh;
  padding: 0.2rem 1.8rem;
  width: 13vw;
`;

const SetSelector = styled.button`
  width: 14vw;
  margin: 0.5vh;
  padding: 0.4rem 0.8rem;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;
