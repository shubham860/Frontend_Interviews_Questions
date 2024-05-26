import FillBoxes from './components/FillBoxes';
import Autocompleter from './components/AutoCompleter';
import TodoList from './components/TodoList';
import Accordian from './components/Accordian';
import Tabs from './components/Tabs';
import Carousel from './components/Carousel';
import './App.css'
import InfiniteScroll from './components/InfiniteScroll';
import InfiniteScrollIOPattern from './components/InfiniteScroll/InfiniteScroll';
import StartRating from './components/StarRating';
import ProgressBar from './components/ProgressBar';
import Pagination from './components/Pagination';
import TicTacToe from './components/TicTacToe';
import ModalComponent from './components/Modal';

function App() {
  return (
    <div className="App">
      <h1>ProgressBar</h1>
      <ProgressBar />
      <h1>Modal</h1>
      <ModalComponent />
      <h1>Tic Tac Toe</h1>
      <TicTacToe />
      <h1>Pagination</h1>
      <Pagination />
      <h1>Star Rating</h1>
      <StartRating />
      <h1>Infinite Scroll using intersection observer</h1>
      <InfiniteScrollIOPattern />
      <h1>Infinite Scroll using scroll event</h1>
      <InfiniteScroll />
      <h1>Carousel</h1>
      <Carousel />
      <h1>Tabs</h1>
      <Tabs />
      <h1>Accordian</h1>
      <Accordian />
      <h1>TodoList</h1>
      <TodoList />
      <h1>AutoCompleter</h1>
      <Autocompleter />
      <h1>Fill Boxes</h1>
      <FillBoxes />
    </div>
  );
}

export default App;
