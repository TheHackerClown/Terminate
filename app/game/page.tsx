


export default function Game() {
  return (<>
    <div className="row">
    
    <div className="w-1/3 border-2 mr-2">
    for Server Details
    </div>

    <div className="column w-1/2"><div className=" border-2 text-center p-2 text-red-500 hover:text-black hover:bg-white hover:border-red-600 select-none">
      Terminate
    </div>
    <canvas className="h-50 border-2 m-2" >For Game Canvas</canvas>
    <div className="border-2 text-xs text-center">Made with ❤️ by <a className="text-red-300 hover:border-b-1" href="https://github.com/TheHackerClown">TheHackerClown</a></div>
    </div>

    <div className="w-1/3 border-2 ml-2">
    For Global Chat
    </div>

  </div>
  </>
  )
}