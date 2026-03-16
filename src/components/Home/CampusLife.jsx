import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampusLife = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 underline underline-offset-8">
                    Campus Life
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={`/campus-life/c${n}.jpg`}
                                alt={`Campus Life ${n}`}
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate('/gallery')}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
                    >
                        View All Photos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CampusLife;