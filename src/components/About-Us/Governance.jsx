import React from "react";
import HeroSection from "../common/components/HeroSection";
import { governanceHero } from "../common/data/heroData";

const Governance = () => {
  return (
    <>
      <HeroSection {...governanceHero} />

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border border-gray-300 text-center">

              {/* Table Header */}
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-4 px-4 border border-gray-300">SR.NO</th>
                  <th className="py-4 px-4 border border-gray-300">NAME OF MEMBER</th>
                  <th className="py-4 px-4 border border-gray-300">DESIGNATION</th>
                  <th className="py-4 px-4 border border-gray-300">BACKGROUND</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-gray-50 text-gray-800">

                <tr>
                  <td className="py-4 border border-gray-300">01</td>
                  <td className="py-4 border border-gray-300">Mr. Rajaram D. Pangavahane (Patil)</td>
                  <td className="py-4 border border-gray-300">President</td>
                  <td className="py-4 border border-gray-300">Educationist</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">02</td>
                  <td className="py-4 border border-gray-300"></td>
                  <td className="py-4 border border-gray-300">Member</td>
                  <td className="py-4 border border-gray-300">Nominee of AICTE</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">03</td>
                  <td className="py-4 border border-gray-300">Dr. G. V. Garje</td>
                  <td className="py-4 border border-gray-300">Member</td>
                  <td className="py-4 border border-gray-300">Nominee of DTE</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">04</td>
                  <td className="py-4 border border-gray-300">Mr. Navnath Pawar</td>
                  <td className="py-4 border border-gray-300">Member</td>
                  <td className="py-4 border border-gray-300">Industrialist</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">05</td>
                  <td className="py-4 border border-gray-300">Mr. Gaurav R. Pangavhane (Patil)</td>
                  <td className="py-4 border border-gray-300">General Secretary</td>
                  <td className="py-4 border border-gray-300">Educationist</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">06</td>
                  <td className="py-4 border border-gray-300">Dr. G. S. Talele</td>
                  <td className="py-4 border border-gray-300">Member</td>
                  <td className="py-4 border border-gray-300">Campus Director, NGSPM</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">07</td>
                  <td className="py-4 border border-gray-300">Dr. Vijay Wagh</td>
                  <td className="py-4 border border-gray-300">Member</td>
                  <td className="py-4 border border-gray-300">Principal, COP</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">08</td>
                  <td className="py-4 border border-gray-300">Prof. Chandrakant Shirsath</td>
                  <td className="py-4 border border-gray-300">Member</td>
                  <td className="py-4 border border-gray-300">Principal, BV Jr. College</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">09</td>
                  <td className="py-4 border border-gray-300">Prof. Mandar. M Kulkarni</td>
                  <td className="py-4 border border-gray-300">Member</td>
                  <td className="py-4 border border-gray-300">HOD, Computer Technology</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">10</td>
                  <td className="py-4 border border-gray-300">Prof. P. R. Jadhav</td>
                  <td className="py-4 border border-gray-300">Member</td>
                  <td className="py-4 border border-gray-300">HOD, Civil Engineering</td>
                </tr>

                <tr>
                  <td className="py-4 border border-gray-300">11</td>
                  <td className="py-4 border border-gray-300">Prof. Vinayak Nikhade</td>
                  <td className="py-4 border border-gray-300">Member Secretary</td>
                  <td className="py-4 border border-gray-300">Principal</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </section>
    </>
  );
};

export default Governance;