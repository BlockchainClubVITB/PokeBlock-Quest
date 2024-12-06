import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";

function Rounds() {
  const { user, logoutUser } = useAuth();
  const round1ButtonDisabled = false;
  const round2ButtonDisabled = false;
  const round3ButtonDisabled = false;
  const round4ButtonDisabled = false;
  const round5ButtonDisabled = false;

  return (
    <div className="bg-[black] text-white flex flex-col justify-center items-center">
      <div className="">
        {/* <div className="flex"> */}
          <div
            className="text-7xl text-orange-700 font-semibold text-center pt-3"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Rounds
          </div>

          {/* <div>Leaderboard</div> */}
        {/* </div> */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {/* Card-1 Round 1 */}
          <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-52">
            <div class="m-2.5 overflow-hidden rounded-md h-44 flex justify-center items-center">
              <img
                class="w-full h-full object-cover"
                src="https://images.squarespace-cdn.com/content/v1/571645b440261d0e2095da20/1551387712835-7VQ55YVY8JB03IOHE9EK/eevee.jpg?format=1000w"
                alt="profile-picture"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="mb-1 text-xl font-semibold text-slate-800">EVEE</h4>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Points : 30
              </p>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Difficulty : Easy
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <button
                type="button"
                className="bg-orange-700 rounded-md px-4 py-2 my-2"
                disabled
              >
                {!round1ButtonDisabled && <Link to="/round1">Round 1</Link>}
                {round1ButtonDisabled && "Round 1"}
              </button>
            </div>
          </div>

          {/* Card-2 Round 2 */}
          <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-52">
            <div class="m-2.5 overflow-hidden rounded-md h-44 flex justify-center items-center">
              <img
                class="w-full h-full object-cover"
                src="https://pics.craiyon.com/2024-09-21/vsLtBy8ZTIe78FNEyrEinw.webp"
                alt="profile-picture"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="mb-1 text-xl font-semibold text-slate-800">
                CHARIZARD
              </h4>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Points : 30
              </p>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Difficulty : Easy
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <button
                type="button"
                className="bg-orange-700 rounded-md px-4 py-2 my-2"
                disabled
              >
                {!round2ButtonDisabled && <Link to="/round2">Round 2</Link>}
                {round2ButtonDisabled && "Round 2"}
              </button>
            </div>
          </div>

          {/* Card-3 Round 3 */}
          <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-52">
            <div class="m-2.5 overflow-hidden rounded-md h-44 flex justify-center items-center">
              <img
                class="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95Zogh4jHtEANPFAgu29xBRbix-ELU6mMXg&s"
                alt="profile-picture"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="mb-1 text-xl font-semibold text-slate-800">PIKACHU</h4>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Points : 60
              </p>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Difficulty : Medium
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <button
                type="button"
                className="bg-orange-700 rounded-md px-4 py-2 my-2"
                disabled
              >
                {!round3ButtonDisabled && <Link to="/round3">Round 3</Link>}
                {round3ButtonDisabled && "Round 3"}
              </button>
            </div>
          </div>

          {/* Card-4 Round 4 */}

          <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-52">
            <div class="m-2.5 overflow-hidden rounded-md h-44 flex justify-center items-center">
              <img
                class="w-full h-full object-cover"
                src="https://www.cnet.com/a/img/hub/2016/07/08/24fc9acf-bcc9-4b10-a1c2-7ab0bed13cbf/pokemon-gym.jpg"
                alt="profile-picture"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="mb-1 text-xl font-semibold text-slate-800">
                GYM BATTLE
              </h4>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Points : 60
              </p>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Difficulty : Medium
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <button
                type="button"
                className="bg-orange-700 rounded-md px-4 py-2 my-2"
                disabled={round4ButtonDisabled}
              >
                {!round4ButtonDisabled && <Link to="/round4">Round 4</Link>}
                {round4ButtonDisabled && "Round 4"}
              </button>
            </div>
          </div>

          {/* Card-5 Round 5 */}
          <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-52">
            <div class="m-2.5 overflow-hidden rounded-md h-44 flex justify-center items-center">
              <img
                class="w-full h-full object-cover"
                src="https://imgcdn.stablediffusionweb.com/2024/3/15/1aa57cb3-0678-474e-b517-105ed8d288d8.jpg"
                alt="profile-picture"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="mb-1 text-xl font-semibold text-slate-800">
                POKEBALLS
              </h4>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Points : 100
              </p>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Difficulty : Hard
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <button
                type="button"
                className="bg-orange-700 rounded-md px-4 py-2 my-2 "
                disabled={round5ButtonDisabled}
              >
                {!round5ButtonDisabled && <Link to="/round5">Round 5</Link>}
                {round5ButtonDisabled && "Round 5"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="links--wrapper bg-black">
        {user ? (
          <>
            <button
              onClick={logoutUser}
              className="inline-block cursor-pointer bg-orange-700 text-white px-4 py-2 transition-colors duration-300 border border-black no-underline hover:bg-white hover:text-black"
              to="/"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="inline-block cursor-pointer bg-black text-white px-4 py-2 transition-colors duration-300 border border-black no-underline hover:bg-white hover:text-black"
            to="/"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Rounds;
