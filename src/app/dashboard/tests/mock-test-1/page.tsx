"use client"

import React, { useState } from "react"
import Image from "next/image"

const MockTestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between border-b bg-white dark:bg-gray-800 px-4 py-2">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            GATE 2026 DEMO TEST CS
          </h1>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Time Remaining: 174:43
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            Question Paper
          </button>
          <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            Instructions
          </button>
          <div className="flex items-center space-x-2">
            <Image
              src="/yash_profile.jpg"
              alt="Yash Dharmendra Parmar"
              width={32}
              height={32}
              className="object-cover rounded-full"
            />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Yash Dharmendra Parmar
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
        {/* Left Panel */}
        <aside className="w-64 border-r bg-white dark:bg-gray-800 p-4 flex flex-col">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Section: General Aptitude</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Q.1 - Q.10</p>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 65 }, (_, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded ${
                  i === currentQuestion
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
                onClick={() => setCurrentQuestion(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </aside>

        {/* Center Panel (Question) */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Question No. 1
            </p>
            <p className="mb-4">
              Let L<sub>1</sub> = {"{ a^n b^n | n ≥ 0 }"} and L<sub>2</sub> = {"{ a^n b^m | n ≥ m, n, m ≥ 0 }"}.
              Which one of the following is true?
            </p>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="q1" />
                  <span>L1 is regular and L2 is not regular</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="q1" />
                  <span>L1 ∪ L2 is regular</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="q1" />
                  <span>L1 ∩ L2 is regular</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="q1" />
                  <span>L1 – L2 is regular</span>
                </label>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div className="space-x-2">
              <button className="px-4 py-2 rounded bg-yellow-500 text-white">
                Mark for Review & Next
              </button>
              <button className="px-4 py-2 rounded bg-green-600 text-white">
                Save & Next
              </button>
            </div>
            <div className="space-x-2">
              <button className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700">
                Clear Response
              </button>
              <button className="px-4 py-2 rounded bg-red-600 text-white">
                Submit
              </button>
            </div>
          </div>
        </main>

        {/* Right Panel (Legend) */}
        <aside className="w-48 border-l bg-white dark:bg-gray-800 p-4">
          <h3 className="text-sm font-semibold mb-2">Legend</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="inline-block w-4 h-4 bg-blue-600 mr-2"></span>Current
            </li>
            <li>
              <span className="inline-block w-4 h-4 bg-green-600 mr-2"></span>
              Answered
            </li>
            <li>
              <span className="inline-block w-4 h-4 bg-yellow-500 mr-2"></span>
              Marked
            </li>
            <li>
              <span className="inline-block w-4 h-4 bg-gray-300 mr-2"></span>
              Not Visited
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default MockTestPage
