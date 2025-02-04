const getAttributes = (dataTarget = '', targetUid, nestedComponents) => {
  const defaultAttributes = [
    'text',
    'email',
    'richtext',
    'password',
    'number',
    'enumeration',
    'date',
    'media',
    'boolean',
    'json',
    'relation',
  ];

  const isPickingAttributeForAContentType = dataTarget === 'contentType';
  const canAddComponentInAnotherComponent = true;

  if (isPickingAttributeForAContentType) {
    return [
      [...defaultAttributes, 'uid'],
      ['component', 'dynamiczone'],
    ];
  }

  if (canAddComponentInAnotherComponent) {
    return [defaultAttributes, ['component']];
  }

  return [defaultAttributes];
};

export default getAttributes;
