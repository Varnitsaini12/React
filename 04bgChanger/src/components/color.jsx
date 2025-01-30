function colorChanger(color) {
  document.body.style.backgroundColor = color;
}

function Color() {
  return (
    <footer className="fixed bottom-4 left-0 w-full justify-center flex space-x-10 p-4">
      <button
        id="button"
        className="bg-red-500 px-4 py-2 rounded-xl text-white hover:bg-red-600 active:bg-red-700"
        onClick={() => colorChanger("red")}
      >
        Red
      </button>
      <button
        id="button"
        className="bg-blue-500 px-4 py-2 rounded-xl text-white hover:bg-blue-600 active:bg-blue-700"
        onClick={() => colorChanger("blue")}
      >
        Blue
      </button>
      <button
        id="button"
        className="bg-yellow-400 px-4 py-2 rounded-xl text-white hover:bg-yellow-600 active:bg-yellow-700"
        onClick={() => colorChanger("yellow")}
      >
        Yellow
      </button>
      <button
        id="button"
        className="bg-purple-200 px-4 py-2 rounded-xl text-white hover:bg-purple-600 active:bg-purple-700"
        onClick={() => colorChanger("purple")}
      >
        Lavender
      </button>
      <button
        id="button"
        className="bg-green-500 px-4 py-2 rounded-xl text-white hover:bg-green-600 active:bg-green-700"
        onClick={() => colorChanger("green")}
      >
        Green
      </button>
    </footer>
  );
}

export default Color;
