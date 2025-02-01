import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Circle, CheckCircle, Shield, Leaf, Trash2, BatteryCharging } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const data1 = {
    labels: [
      "Yes, I plan to in the future",
      "No, we don't plan",
      "I find it difficult to answer",
      "Yes, I already use it",
    ],
    datasets: [
      {
        data: [50, 15, 10, 25],
        backgroundColor: ["#003d00", "#a1e19b", "#5fb157", "#7ba85a"],
      },
    ],
  };

  const data2 = {
    labels: ["Important", "Doesn't matter at all", "Very important", "Doesn't matter"],
    datasets: [
      {
        data: [45, 10, 40, 5],
        backgroundColor: ["#003d00", "#00b050", "#8dc63f", "#687e2b"],
      },
    ],
  };

  return (
    <div>
      {/* Первый блок */}
      <div className="flex items-center justify-between mt-24 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5 justify-center">
          {/* Текстовая часть */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            Eco Pakhta: Sustainable Insulation for a Greener Future
            </h1>
            <p className="text-lg text-gray-700 mb-6 text-center lg:text-left">
            At Eco Pakhta, we are dedicated to revolutionizing insulation with our eco-friendly solutions made from recycled paper. Join us in creating a sustainable future while enhancing energy efficiency in your home.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-[#003d00] hover:bg-[#8dc63f] transition-all duration-300 text-white rounded">
              Learn More
              </button>

              <button className="px-6 py-2 border border-[#003d00] text-[#003d00] rounded hover:bg-[#8dc63f] transition">
              Contact Us
              </button>
            </div>
          </div>

          {/* Правый блок с изображением */}
          <div className="flex justify-center items-center">
            <div className="w-[600px] h-[600px] relative">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/public/hands.webp"
                alt="hands"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Второй блок */}
      <div className="mt-32 flex flex-col justify-center items-center text-center px-4">
        <div className="w-full max-w-8xl">
          <p className="text-sm font-semibold text-gray-700">EcoPakhta</p>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 my-8">
          PROJECT STUDY
          </h1>
          <div className="flex flex-col items-center bg-[#fcfce2] p-10 md:p-16 w-full rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 w-full">
              <div className="flex flex-col items-center mb-12 sm:mb-0">
                <h2 className="text-2xl font-semibold mb-6 text-center w-full">
            Do you use or plan to use environmentally friendly building materials in your home?
                </h2>
                <div className="lg:w-[450px] lg:h-[450px] w-[350px] h-[350px] flex justify-center">
                  <Pie data={data1} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-6 text-center w-full">
            How important is it to you to use environmentally friendly building materials?
                </h2>
                <div className="lg:w-[450px] lg:h-[450px] w-[350px] h-[350px] flex justify-center">
                  <Pie data={data2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Третий блок */}
      <div className="flex items-center justify-between mt-36 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5 justify-center">
          {/* Левый блок с изображением */}
          <div className="flex justify-center items-center">
            <div className="w-[500px] h-[500px] relative">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/public/research.jpg"
                alt="hands"
              />
            </div>
          </div>

          {/* Текстовая часть справа */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            PROJECT RESEARCH
            </h1>
            <p className="text-lg text-gray-700 mb-6 text-center lg:text-left">
            A survey was conducted among <span className="font-bold text-[#8dc63f]">80</span> people, which revealed that the majority of them have a positive attitude toward the use of recycled materials in construction.
            </p>

            <p className="text-lg text-gray-700 mb-6 text-center lg:text-left">
            How many of them were women and girls?
              <br />
              <span className="font-bold text-[#8dc63f]">26</span> were women, and <span className="font-bold text-[#8dc63f]">6</span>  were girls.
            </p>
          </div>
        </div>
      </div>

      {/* Четвертый блок */}
      <div className="py-12 mt-24 bg-gray-100">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
    Transform Your Space with Eco-Friendly Insulation Solutions
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Block 1 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white to-blue-100 shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300 w-[260px] mx-auto">
            <Circle className="w-12 h-12 text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2"> Efficiency</h3>
            <p className="text-gray-700 text-base">
        Insufficient energy efficiency of houses. Explore sustainable solutions for better energy efficiency.
            </p>
          </div>
          {/* Block 2 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white to-green-100 shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300 w-[260px] mx-auto">
            <CheckCircle className="w-12 h-12 text-green-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2"> Affordable Price</h3>
            <p className="text-gray-700 text-base">
        High price of insulating materials. We provide cost-effective eco-friendly insulation.
            </p>
          </div>
          {/* Block 3 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white to-purple-200 shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300 w-[260px] mx-auto">
            <Shield className="w-12 h-12 text-purple-700 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3. High Quality</h3>
            <p className="text-gray-800 text-base">
    Mistrust of ecological materials. Our materials combine quality, eco-friendliness, and durability.
            </p>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white to-yellow-100 shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300 w-[260px] mx-auto">
            <Leaf className="w-12 h-12 text-yellow-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Eco-friendliness</h3>
            <p className="text-gray-700 text-base">
        Use of toxic materials as fuels. We prioritize eco-friendly insulation solutions to protect the environment.
            </p>
          </div>
        </div>
      </div>

      {/* Пятый блок */}
      <div className="flex flex-col mt-20 lg:flex-row items-center justify-between gap-10 px-6 py-16 bg-gray-50">
        {/* Левая часть - текст */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
      WHAT PROBLEMS DO WE SOLVE?
          </h2>
          <ul className="text-gray-700 text-lg space-y-4">
            <li>🌫 Annual air pollution with smog</li>
            <li>💰 Significant costs of citizens for other types of heating</li>
            <li>🏚 Disadvantages of already used insulation in Kyrgyzstan</li>
            <li>♻️ Use of plastic and other environmentally harmful materials in fuel</li>
          </ul>
        </div>

        {/* Правая часть - коллаж изображений */}
        <div className="flex-1 flex flex-wrap lg:flex-nowrap justify-center items-center relative w-full h-auto lg:h-[400px] gap-4 lg:gap-0">
          {/* Основное фото */}
          <div
            className="w-[70%] lg:w-2/3 h-[200px] lg:h-2/3 bg-cover bg-center rounded-xl shadow-lg"
            style={{
              backgroundImage: "url('/public/1problem.jpeg')",
            }}
          ></div>
          {/* Маленькие фото */}
          <div
            className="w-[45%] lg:w-1/3 h-[150px] lg:h-1/3 bg-cover bg-center rounded-xl shadow-lg lg:absolute lg:bottom-4 lg:right-4"
            style={{
              backgroundImage: "url('/public/2problema.jpg')",
            }}
          ></div>
          <div
            className="w-[50%] lg:w-1/2 h-[170px] lg:h-[220px] bg-cover bg-center rounded-xl shadow-lg lg:absolute lg:top-4 lg:right-10"
            style={{
              backgroundImage: "url('/public/3problema.webp')",
            }}
          ></div>
        </div>
      </div>

      {/* Шестой блок */}
      <div className="py-16 bg-gray-100 px-6 mt-8">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
      HOW DO YOU PLAN TO SOLVE THE PROBLEMS LISTED?
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-4">
            {/* Карточка 1 */}
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-green-100 to-green-300 shadow-lg p-8 rounded-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-[280px] md:w-[320px] lg:w-[350px] mx-auto">
              <CheckCircle className="w-14 h-14 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Reducing Smog Pollution
              </h3>
              <p className="text-gray-700 text-base">
          Using our Eco Pakhta reduces the need for traditional fuels, thereby lowering the emission of pollutants into the atmosphere.
              </p>
            </div>

            {/* Карточка 2 */}
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-red-100 to-red-300 shadow-lg p-8 rounded-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-[280px] md:w-[320px] lg:w-[350px] mx-auto">
              <Trash2 className="w-14 h-14 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Eliminating Toxic Materials
              </h3>
              <p className="text-gray-700 text-base">
          Our Eco Pakhta solution minimizes the need to use plastic, tyres, and other harmful substances for heating.
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-yellow-100 to-yellow-300 shadow-lg p-8 rounded-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-[280px] md:w-[320px] lg:w-[350px] mx-auto">
              <BatteryCharging className="w-14 h-14 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Reducing Dependence on Coal
              </h3>
              <p className="text-gray-700 text-base">
          By reducing reliance on coal and other mineral energy sources, we pave the way for cleaner, sustainable energy alternatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Седьмой блок */}
      <div className="py-16 bg-gradient-to-r from-gray-200 to-gray-300 px-6 rounded-md mt-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Profitability of the Project
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
      We, the Enactus KSTU team, offer individuals, small and medium-sized businesses environmentally friendly, energy-efficient Eco Pakhta insulation, which will increase the thermal efficiency of buildings by up to
          </p>
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-green-600">10%</span>
            <span className="text-4xl font-bold text-gray-800">to</span>
            <span className="text-4xl font-bold text-green-600">65%</span>
          </div>
          <p className="text-lg md:text-xl text-gray-700">
      This solution provides a significant improvement in energy efficiency, helping to reduce heating costs and minimize environmental impact.
          </p>
        </div>
      </div>

      {/* Большой блок - Инновация проекта */}
      <div className="w-full mt-8 bg-gradient-to-r from-green-400 to-blue-500 py-16 px-6 rounded-t-md">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
      WHAT IS THE INNOVATION OF OUR PROJECT?
          </h1>
        </div>
      </div>

      {/* Восьмой блок - Инновация проекта */}
      <div className="w-full bg-gradient-to-r from-blue-200 to-green-200 rounded-b-md py-16 px-6">
        <div className="flex items-center justify-between px-6">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5 justify-center">
            {/* Левый блок с изображениями */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-6 lg:gap-8 flex-wrap justify-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover relative rounded-lg" src="/public/waste-paper.webp" alt="Waste Paper" />
                <span className="text-3xl font-bold text-gray-700">+</span>
                <img className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-lg" src="/public/boric-acid.webp" alt="Boric Acid" />
                <span className="text-3xl font-bold text-gray-700">+</span>
                <img className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-lg" src="/public/borax.webp" alt="Borax" />
                <span className="text-3xl font-bold text-gray-700">=</span>
                <img className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-lg" src="/public/ecopakhta-final.webp" alt="EcoPakhta Material" />
              </div>
            </div>

            {/* Текстовая часть справа */}
            <div className="flex flex-col justify-center items-center lg:items-start mt-6 lg:mt-0">
              <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-102">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center lg:text-left">
                  <span className="text-9xl sm:text-5xl md:text-6xl font-bold mb-4">1. </span>
                ECO PAKHTA&apos;S ENVIRONMENTAL FRIENDLINESS
                </h1>
                <p className="text-lg sm:text-xl text-white mb-6 text-center lg:text-left">
                EcoPakhta consists of environmentally friendly materials:
                </p>
                <ul className="text-lg sm:text-xl text-white list-disc pl-6 space-y-2">
                  <li><span className="font-bold text-[#fec223]">Waste paper</span> – paper, cardboard, etc.</li>
                  <li><span className="font-bold text-[#fec223]">Boric acid</span> – antiseptic</li>
                  <li><span className="font-bold text-[#fec223]">Borax</span> – flame retardant</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Блок перечисления инноваций */}
        <div className="container mx-auto text-center mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Пункт 2 */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-green-300 to-green-500 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-4">
                <span className="text-5xl">2.</span> Low Thermal Conductivity
              </div>
              <p className="text-lg sm:text-xl text-white mb-6">
        Eco Pakhta provides excellent insulation due to its low thermal conductivity, reducing energy consumption.
              </p>
            </div>

            {/* Пункт 3 */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-300 to-blue-500 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-4">
                <span className="text-5xl">3.</span> Moisture Resistance
              </div>
              <p className="text-lg sm:text-xl text-white mb-6">
        Eco Pakhta naturally regulates humidity and allows buildings to breathe, ensuring optimal moisture content.
              </p>
            </div>

            {/* Пункт 4 */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-yellow-300 to-yellow-500 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-4">
                <span className="text-5xl">4.</span> Fire Safety
              </div>
              <p className="text-lg sm:text-xl text-white mb-6">
        Adding borax as a fire retardant creates effective fire protection, making Eco Pakhta a safe insulation choice.
              </p>
            </div>

            {/* Пункт 5 */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-red-300 to-red-500 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-4">
                <span className="text-5xl">5.</span> Biological Protection
              </div>
              <p className="text-lg sm:text-xl text-white mb-6">
        The addition of boric acid reduces the risk of mold, mildew, rodents, and pests, ensuring long-lasting protection.
              </p>
            </div>
          </div>
        </div>

      </div>


      {/* Девятый блок */}
      <div className="py-16 bg-gradient-to-r from-gray-500 to-gray-600 px-6 rounded-md mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Левая часть – PROJECT PROFITABILITY */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        PROJECT PROFITABILITY
            </h2>
            <p className="text-lg md:text-xl text-white mb-8">
        The main source of income is the sale of Eco Pakhta.
              <br />
        Cost - <span className="font-bold text-[#fec223]">65 som/0.74 $ (1-kg)</span>
            </p>
            <div className="flex flex-col items-center md:items-start gap-4 mb-6">
              <div className="text-2xl font-bold text-white">Planned revenue in the first months:</div>
              <div className="text-3xl font-bold text-green-400">32,500 som / 371.64 $</div>
            </div>
            <p className="text-lg md:text-xl text-white">
        Obtaining grant funds to scale production.
            </p>
          </div>

          {/* Правая часть – BUDGET */}
          <div className="bg-gray-700 flex p-8 rounded-lg shadow-lg text-white">
            {/* Левый блок */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fec223]">BUDGET</h2>
              <p className="text-lg md:text-xl mb-6">
            Requested Amount: <span className="font-bold text-green-300">$190,000</span>
              </p>
              <h3 className="text-2xl font-bold mb-4">Project budget:</h3>
              <ul className="text-lg space-y-2">
                <li>✔ Purchase of equipment (industrial shredder, mixer)</li>
                <li>✔ Boric acid and sodium tetraborate</li>
                <li>✔ Waste paper (cardboard and paper)</li>
              </ul>
            </div>
            <div className="flex items-center justify-center relative w-full h-[400px]">
              <img className="absolute right-0 transform -rotate-6 w-[250px]" src="/public/meshok.webp" alt="Machine 1" />
              <img className="absolute z-10 w-[300px]" src="/public/shreder.webp" alt="Machine 2" />
              <img className="absolute left-0 transform w-[250px]" src="/public/smesitel.webp" alt="Machine 3" />
            </div>

          </div>
        </div>
      </div>

      {/* Одиннадцатый блок */}
      <div className="mt-36 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
        WHAT RESULTS DO YOU EXPECT FROM THE PROJECT?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Блок качественных результатов */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Quality results:
            </h2>
            <ul className="text-lg text-gray-700 list-disc list-inside">
              <li>Improvement in quality of life;</li>
              <li>Reduction of carbon footprint;</li>
              <li>Improvement in air quality in Kyrgyzstan (especially in Bishkek).</li>
            </ul>
          </div>

          {/* Блок количественных результатов */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Quantitative results:
            </h2>
            <ul className="text-lg text-gray-700 list-disc list-inside">
              <li><span className="text-green-600 font-bold">10-15%</span> of the target market of insulation manufacturers in Kyrgyzstan;</li>
              <li><span className="text-green-600 font-bold">1-2%</span> of the insulation suppliers market in Kyrgyzstan.</li>
              <li><span className="text-green-600 font-bold">5000KG</span> per month</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Блок контактов */}
      <div className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 px-6 rounded-lg shadow-lg mt-36">
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg mb-6">
      If you have any questions, feel free to reach out to us!
          </p>

          {/* Контактная информация */}
          <div className="text-lg">
            <p className="mb-2">
              <span className="font-semibold">INSTAGRAM:</span> @enactus.politech
            </p>
            <p className="mb-2">
              <span className="font-semibold">E-mail:</span> enactus.politech@gmail.com
            </p>
            <p className="mb-6">
              <span className="font-semibold">Telephone number:</span> +996 701 009 095
            </p>
          </div>

          {/* Форма ввода почты */}
          <div className="flex justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-64 rounded-full border-none text-gray-900 focus:outline-none shadow-md"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
        Send
            </button>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
