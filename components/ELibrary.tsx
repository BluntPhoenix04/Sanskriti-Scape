"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HoverEffect } from "@/components/ui/card-hover-effect"

// Mock data for library resources
const resources = [
  {
    id: 1,
    title: "Ramayana",
    author: "Valmiki",
    date: "500 BCE",
    printed: "First printed in 19th century CE",
    origin: "India",
    description: "An ancient Indian epic narrating the life of Prince Rama.",
    link: "https://www.valmikiramayan.net/",
  },
  {
    id: 2,
    title: "Mahabharata",
    author: "Vyasa",
    date: "400 BCE – 400 CE",
    printed: "First printed in 19th century CE",
    origin: "India",
    description: "The longest epic poem in the world, detailing the Kurukshetra War.",
    link: "https://www.gutenberg.org/files/19630/19630-h/19630-h.htm",
  },
  {
    id: 3,
    title: "Bhagavad Gita",
    author: "Vyasa (as part of Mahabharata)",
    date: "200 BCE – 200 CE",
    printed: "First printed in 1785 CE",
    origin: "India",
    description: "A 700-verse Hindu scripture that is part of the Mahabharata.",
    link: "https://ignca.gov.in/Asi_data/279.pdf",
  },
];

const ELibrary = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredResources, setFilteredResources] = useState(resources)

  // Automatically show all cards when search bar is cleared
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResources(resources)
    }
  }, [searchTerm])

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredResources(resources)
    } else {
      const filtered = resources.filter(
        (resource) =>
          resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.printed.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.date.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredResources(filtered)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div>
      {/* Search Section */}
      <div className="flex gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      
      {/* Resources Section */}
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={filteredResources} />
      </div>
    </div>
  )
}

export default ELibrary

