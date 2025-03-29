import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        class="py-0 not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-8" >
        <div
          class="mx-auto max-w-md border-x border-x-gray-200 px-6 py-5 dark:border-x-gray-800 dark:bg-gray-950/10">
          <form>
            <div>
              <label
                for="username"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >Username</label>
              <div class="mt-1">
                <input
                  id="username"
                  class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                  type="text"
                  placeholder="username"
                  name="username"
                />
              </div>
            </div>
            <div class="mt-6">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >Email</label>
              <div class="mt-1">
                <input
                  id="email-1"
                  class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >Password</label>
              <div class="mt-1">
                <input
                  id="password"
                  autocomplete="none"
                  class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                  type="password"
                  name="password"
                />
              </div>
            </div>
            <div class="mt-6 text-right">
              <button
                class="rounded-md bg-sky-500 px-5 py-2.5 text-sm leading-5 font-semibold text-white hover:bg-sky-700 ">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
