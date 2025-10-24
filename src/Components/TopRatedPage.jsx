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

  // Top rated toys filter (rating >= 4.5)
  const chartData = toys
    .filter((toy) => toy.rating >= 4.5)
    .map((toy) => ({
      name: toy.toyName,
      rating: toy.rating,
    }));

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <title>Top-Rated-Page</title>
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">
        Top Rated Toys 🎯
      </h1>

      {chartData.length > 0 ? (
        <div className="w-full h-99">
          <ResponsiveContainer width="70%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval={0}
                angle={-30}
                textAnchor="end"
              />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Bar dataKey="rating" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No top rated toys found.
        </p>
      )}
    </div>
  );
};

export default TopRatedPage;
