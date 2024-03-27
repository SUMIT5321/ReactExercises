import { useSelector } from 'react-redux'
import './App.css'
import { GameEndScreen } from './components/GameEndScreen';
import { StartGameScreen } from './components/StartGameScreen';
import { gameState, participants } from './gameConfiguration';
import { ParticipantHealth } from './components/ParticipantHealth';
import { ActionPanel } from './components/ActionPanel';
import { MovesPanel } from './components/MovesPanel';

function App() {
  const currentGameState = useSelector(state => state.gameState);
  
  switch (currentGameState) {
    case gameState.inProgress:
      return <>
        <div className='healthPanel'>
          <ParticipantHealth participantId={participants.monster.id}></ParticipantHealth>
          <ParticipantHealth participantId={participants.player.id}></ParticipantHealth>
        </div>
        <ActionPanel></ActionPanel>
        <MovesPanel></MovesPanel>
      </>
    case gameState.gameOver:
      return <GameEndScreen></GameEndScreen>
    default:
      return <StartGameScreen></StartGameScreen>
  }
}

export default App
