// data structure of a catalogue in which some nodes should be marked as favorites

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: []
    }
  ]
};

// list of IDs of favorite nodes
const favorites = ['id-2'];

/* function marking a node in a catalogue as favorite. Receives the data structure (multilevel object or object
  containing other objects in itself) as the first argument and list of IDs of favorite items as the second argument */
const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree, 
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites))
  };
};