import React from 'react';

// Recursive component to render nested bullet points
const RenderPoints = ({ points, depth = 0 }) => {
  const listStyles = [
    "list-disc pl-6",
    "list-[circle] pl-6",
    "list-[square] pl-6",
  ];

  return (
    <ul className={`${listStyles[Math.min(depth, 2)]} space-y-2 mt-2 text-gray-700 font-medium`}>
      {points.map((point, index) => {
        const isString = typeof point === "string";
        const text = isString ? point : point.text;
        const subPoints = isString ? null : point.subPoints;

        return (
          <li key={index} className="leading-relaxed">
            <span className={depth === 0 ? "text-gray-900" : ""}>{text}</span>
            {subPoints && subPoints.length > 0 && (
              <RenderPoints points={subPoints} depth={depth + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const EligibilitySection = ({ title, subtitle, description, points, table, tableTitle, note }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 md:p-10 mb-12 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{title}</h2>
      {subtitle && (
        <h3 className="text-lg font-bold text-gray-800 mb-4">{subtitle}</h3>
      )}

      {description && (
        <p className="text-gray-600 mb-6 text-base italic">{description}</p>
      )}

      {/* Bullet Points */}
      <div className="mb-8">
        <RenderPoints points={points} depth={0} />
      </div>

      {/* Table Title / Condition (iii) */}
      {tableTitle && (
        <p className="text-gray-700 font-medium mb-4 leading-relaxed">{tableTitle}</p>
      )}

      {/* Table */}
      {table && (
        <div className="overflow-x-auto mb-8 rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full border-collapse">
            <thead className="bg-[#334155] text-white">
              <tr>
                {table.headers.map((header, i) => (
                  <th key={i} className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-600 last:border-r-0">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50/30 transition-colors`}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-5 py-4 text-gray-700 text-sm font-medium border-r border-gray-100 last:border-r-0">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Note */}
      {note && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">Note:</span> {note}
          </p>
        </div>
      )}
    </div>
  );
};

export default EligibilitySection;
