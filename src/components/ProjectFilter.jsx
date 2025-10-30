import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

const ProjectFilter = ({ projects, onFilterChange, allTech }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    onFilterChange({ search: value, tech: selectedTech });
  };

  const handleTechToggle = (tech) => {
    const newSelected = selectedTech.includes(tech)
      ? selectedTech.filter((t) => t !== tech)
      : [...selectedTech, tech];
    setSelectedTech(newSelected);
    onFilterChange({ search: searchTerm, tech: newSelected });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTech([]);
    onFilterChange({ search: '', tech: [] });
  };

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search projects..."
          className="w-full pl-12 pr-4 py-3 glass rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {searchTerm && (
          <button
            onClick={clearFilters}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Tech Filters */}
      <div className="flex flex-wrap gap-2">
        {allTech.map((tech) => {
          const isSelected = selectedTech.includes(tech);
          return (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTechToggle(tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-primary text-dark-100'
                  : 'glass-light text-adaptive-gray-light hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {tech}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFilter;

