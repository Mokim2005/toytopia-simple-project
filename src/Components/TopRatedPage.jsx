import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TopRatedPage = () => {
  const toys = useLoaderData();

  // Filter top-rated toys (rating >= 4.5)
  const chartData = toys
    .filter((toy) => toy.rating >= 4.5)
    .map((toy) => ({
      name: toy.toyName,
      rating: toy.rating,
    }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-12 px-6">
      <title>Top-Rated-Page</title>

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">⭐ Top Rated Toys 🎯</h1>
        <p className="text-gray-300 text-lg mb-10">
          Discover the most loved toys by our community — rated 4.5 and above!
        </p>

        {chartData.length > 0 ? (
          <div className="bg-[#1a1a2e] p-6 rounded-2xl shadow-2xl border border-purple-700/30 hover:border-purple-500 transition-all duration-300">
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#3b3b5c" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12, fill: "#ccc" }}
                    interval={0}
                    angle={-25}
                    textAnchor="end"
                  />
                  <YAxis
                    domain={[0, 5]}
                    tick={{ fill: "#ccc" }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#2b2b4b",
                      borderRadius: "10px",
                      border: "1px solid #7b5cff",
                      color: "#fff",
                    }}
                  />
                  <Bar
                    dataKey="rating"
                    fill="url(#colorGradient)"
                    radius={[6, 6, 0, 0]}
                  />
                  <defs>
                    <linearGradient
                      id="colorGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#7b5cff" />
                      <stop offset="100%" stopColor="#5b21b6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg mt-10">
            No top-rated toys found 😔
          </p>
        )}
      </div>
    </div>
  );
};

export default TopRatedPage;