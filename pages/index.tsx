import type { NextPage } from 'next';
import {
  CheckIcon,
  ChevronDownIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const Home: NextPage = () => {
  const projects = [
    { name: 'Alpha' },
    { name: 'Beta' },
    { name: 'Gama' },
    { name: 'Delta' },
    { name: 'Tau' },
  ];

  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='flex flex-col h-[500px] w-[700px] border-2 border-[#eee] rounded'>
        <div className='flex flex-row items-center px-4 h-[50px] bg-gray-200 rounded justify-between'>
          <div className='flex flex-row items-center'>
            <span className='mr-2'>Projects</span>
            <Listbox value={selected} onChange={setSelected}>
              <div className='relative'>
                <Listbox.Button className='relative w-full cursor-pointer hover:opacity-80 rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                  <span className='block truncate'>{selected.name}</span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                    <ChevronDownIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {projects.map((project, projectIdx) => (
                      <Listbox.Option
                        key={projectIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-4 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={project}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {project.name}
                            </span>
                            {selected ? (
                              <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                <CheckIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className='flex flex-row items-center space-x-2'>
            <button className='flex flex-row items-center justify-between cursor-pointer hover:opacity-80 rounded-lg bg-white py-2 px-2 shadow-md sm:text-sm'>
              <PlusIcon className='rounded h-5 w-5 mr-1' />
              <span>New project</span>
            </button>
            <button className='flex flex-row items-center justify-between cursor-pointer hover:opacity-80 rounded-lg bg-white py-2 px-2 shadow-md sm:text-sm'>
              <PencilIcon className='rounded h-5 w-5 mr-1' />
              <span>Edit project</span>
            </button>
            <button className='flex flex-row items-center justify-between cursor-pointer hover:opacity-80 rounded-lg bg-white py-2 px-2 shadow-md sm:text-sm'>
              <TrashIcon className='rounded h-5 w-5 mr-1' />
              <span>Edit project</span>
            </button>
          </div>
        </div>
        <div className='flex flex-col grow h-1 p-4 overflow-y-auto'>
          {[0, 0, 0, 0, 0, 0].map((e, index) => (
            <div
              key={index}
              className='flex flex-row items-center px-2 border border-gray-300 mb-1 rounded min-h-[40px] w-full justify-between'
            >
              <span>Task name</span>
              <span className='text-sm'>
                Created: 00/00/2000 - Finished: 01/01/2000
              </span>
              <div className='flex flex-row space-x-2'>
                <CheckIcon className='cursor-pointer bg-gray-100 border border-gray-300 rounded p-1 h-6 w-6 hover:opacity-70' />
                <PencilIcon className='cursor-pointer bg-gray-100 border border-gray-300 rounded p-1 h-6 w-6 hover:opacity-70' />
                <TrashIcon className='cursor-pointer bg-gray-100 border border-gray-300 rounded p-1 h-6 w-6 hover:opacity-70' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
