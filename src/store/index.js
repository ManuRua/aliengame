import { createStore } from "vuex";

export default createStore({
  state: {
    uiState: "start",
    characterChoices: ["Baker", "Mechanic", "Artist"],
    characyer: "",
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: `What's your dog's name?`,
        Baker: "Woofgang Puck",
        Mechanic: "Alf",
        Artist: "Salvador Dogi",
      },
      {
        question: `What's your favorite hobby?`,
        Baker: "Extreme ironing",
        Mechanic: "Bacon santa cosplay",
        Artist: "Mimosas",
      },
      {
        question: `What's your favorite color?`,
        Baker: "turquoise",
        Mechanic: "yellow",
        Artist: "transparent",
      },
      {
        question: `Is cereal soup?`,
        Baker: "You can't be serieal",
        Mechanic: "Yes, I am Jason Lengstorf",
        Artist: "wut",
      },
      {
        question: `What’s the most imaginative insult you can come up with?`,
        Baker: "You're a substitute teacher with no lesson plan",
        Mechanic: "Yer face is a melted welly",
        Artist: "You eat buttons off the remote",
      },
      {
        question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
        Baker: "legoome",
        Mechanic: "brown paste",
        Artist: "groundnut smoosh",
      },
    ],
  },
  mutations: {
    pickCharacter(state, character) {
      state.character = character;
    },
    updateUIState(state, uiState) {
      state.uiState = uiState;
    },
    pickQuestion(state, character) {
      character === state.character ? (state.score += 13) : (state.score -= 13);

      if (state.questionIndex < state.questions.length - 1) {
        state.questionIndex++;
      } else {
        state.uiState = Math.sign(state.score) > 0 ? "won" : "lost";
      }
    },
    restartGame(state) {
      state.character = "";
      state.questionIndex = 0;
      state.uiState = "start";
      state.score = 0;
    },
  },
  actions: {},
  modules: {},
});
