import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"
import { FaSearch } from "react-icons/fa";
import DotLoader from "react-spinners/DotLoader";
import CardsList from "../components/CardsList";
import backupData from "../assets/cache";
import styled from "styled-components";
import StyledButton from "../components/StyledButton";

export default function Shop({windowWidth}) {

  const [apiResponse, setApiResponse] = useState();
  const [sets, setSets] = useState();
  const [cards, setCards] = useState(backupData.cards);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {

    fetch("https://api.magicthegathering.io/v1/sets", {
      method: "get",
      signal: signal,
    })
    .then(response => response.json())
    .then(response => {
      setApiResponse(response.sets);
      setSets(response.sets);
    })
    .catch(err => console.log(err));

  }, []);

  const searchSets = (query, array) => {
    return array.filter(element => element.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setSets(searchSets(e.target.value, apiResponse));
  }

  const handleSelectSet = (e) => {
    e.preventDefault();
    setIsLoadingCards(true);
    const set = e.target.id || e.target[0].value
    console.log(e.target[0].value)
    fetch(`https://api.magicthegathering.io/v1/cards?set=${set}&random=true&pageSize=12`, {
      method: "get",
      signal: signal,
    })
    .then(response => response.json())
    .then(response => {
      setCards(response.cards);
      setIsLoadingCards(false);
      console.log(response.cards)
    })
    .catch(err => console.log(err));
  }

  const handleAbortRequest = () => {
    controller.abort();
    setIsLoadingCards(false);
  }

  return (
    <ShopDiv>
      {(windowWidth > 920) ? 
        <div>
          <SearchBar
            type="search"
            placeholder="Search Sets"
            onChange={handleSearchInputChange}
            value={searchInput}
          />
          <FaSearch color="var(--grey)"/>
          <SideBar>
            <SimpleBar style={{maxHeight: "80vh", width: "15vw"}}>
              {sets
                ? sets.map(set => {
                  return (
                    <SetSelector
                      key={set.code}
                      id={set.code}
                      onClick={handleSelectSet}>{set.name}
                    </SetSelector>
                  )})
                : <span>loading</span>}
            </SimpleBar>
          </SideBar>
        </div> : 
        <form onSubmit={handleSelectSet}>
          <label htmlFor="sets">Choose a set:</label>
          <input list="setsList" id="sets" name="sets" className="select" />
          <datalist id="setsList">
            {sets && sets.map(set => {
              return (
                <option
                  key={set.code}
                  data-code={set.code}
                  value={set.code}
                >{set.name}</option>
              )})}
          </datalist>
          <StyledButton>OK</StyledButton>
        </form>
      }
      <CardsList cards={cards} />
      {isLoadingCards && 
        <Shade>
          <DotLoader color="var(--main)" />
          <div>
            <h4>We are currently fetching data from the server, it may take a few seconds, or you may cancel the request and keep buying cards from the current set</h4>
            <StyledButton onClick={handleAbortRequest}>Cancel Request</StyledButton>
          </div>
        </Shade>
      }            
    </ShopDiv>
  )
}

const ShopDiv = styled.div`

  position: relative;
  display: flex;
  margin-top: 10vh;

  @media only screen and (max-width: 920px) {
    flex-direction: column;
    width: 100%;

    form {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 1rem;
      color: white;
    }
    
    .select {
      width: 45vw;
    }
  }

  @media only screen and (max-width: 360px) {

    form {
      margin-top: 1.5rem;
    }
  }
`;

const SideBar = styled.aside`
  height: 80vh;
  width: 15vw;
  margin-left: 1rem;
  margin-top: 2vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: var(--secondary-op60);
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
  cursor: pointer;
`;

const Shade = styled.div`
  height: 88vh;
  width: 100vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: var(--op80);
  z-index: 3;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
    text-align: center;
  }
`;
