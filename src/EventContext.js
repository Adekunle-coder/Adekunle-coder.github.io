import { createContext, useState } from "react";

export const EventContext = createContext();

export const ProductProvider = (props) => {
  const [home, setHome] = useState(true);
  const [typing, setTyping] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("")
  const [modal, setModal] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [eWallet, setEWallet] = useState(false);
  const [customers, setCustomers] = useState(false);
  const [news, setNews] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [dropdownWallet, setDropDownWallet] = useState(false);
  const [dropdownCustomers, setDropDownCustomers] = useState(false);
  const [dropdownNews, setDropDownNews] = useState(false);

  const closeModal = () => {
    setModal(false)
  }

  function Homeclick() {
    setAboutPage(false);
    setHome(true);
    setCustomers(false);
    setEWallet(false);
    setNews(false);
  }

  function Aboutclick() {
    setAboutPage(true);
    setHome(false);
    setCustomers(false);
    setEWallet(false);
    setNews(false);
    setToggler(false);
  }

  function Walletclick() {
    setEWallet(true);
    setAboutPage(false);
    setHome(false);
    setNews(false);
    setCustomers(false);
    setToggler(false);
  }
  function Customersclick() {
    setCustomers(true);
    setEWallet(false);
    setAboutPage(false);
    setHome(false);
    setNews(false);
    setToggler(false);
  }
  function Newsclick() {
    setNews(true);
    setCustomers(false);
    setEWallet(false);
    setAboutPage(false);
    setHome(false);
    setToggler(false);
  }
  function NotaMenuclick() {
    setNews(false);
    setCustomers(false);
    setEWallet(false);
    setAboutPage(false);
    setHome(false);
  }

  const togglerOpen = () => {
    if (!toggler) {
      setToggler(true);
    } else {
      setToggler(false);
    }
  };

  const showDropDown = () => {
    if (!dropdown) {
      setDropDown(true);
      setDropDownWallet(false);
      setDropDownCustomers(false);
      setDropDownNews(false);
    } else {
      setDropDown(false);
    }
  };

  const showDropDownWallet = () => {
    if (!dropdownWallet) {
      setDropDownWallet(true);
      setDropDown(false);
      setDropDownCustomers(false);
      setDropDownNews(false);
    } else {
      setDropDownWallet(false);
    }
  };

  const showDropDownCustomers = () => {
    if (!dropdownCustomers) {
      setDropDownCustomers(true);
      setDropDownWallet(false);
      setDropDown(false);
      setDropDownNews(false);
    } else {
      setDropDownCustomers(false);
    }
  };

  const showDropDownNews = () => {
    if (!dropdownNews) {
      setDropDownNews(true);
      setDropDownCustomers(false);
      setDropDownWallet(false);
      setDropDown(false);
    } else {
      setDropDownNews(false);
    }
  };


  const handleChange = (e) => {
    const {value} = e.target;
    setSearchInputValue(value)

    if(searchInputValue === "") {
      setTyping(false)
    }
    else {
      setTyping(true)
    }
   }
   console.log(typing)

   const clearSearch = () => {
     setSearchInputValue("")
     setTyping(false)
   }
  


  return (
    <EventContext.Provider
      value={{
        modal,
        closeModal,
        home,
        setHome,
        Homeclick,
        Aboutclick,
        Walletclick,
        Customersclick,
        NotaMenuclick,
        Newsclick,
        togglerOpen,
        aboutPage,
        setAboutPage,
        eWallet,
        setEWallet,
        customers,
        setCustomers,
        news,
        setNews,
        toggler,
        setToggler,
        dropdown,
        showDropDown,
        dropdownWallet,
        showDropDownWallet,
        dropdownCustomers,
        showDropDownCustomers,
        dropdownNews,
        showDropDownNews,
        typing,
        handleChange,
        searchInputValue,
        clearSearch
        
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
