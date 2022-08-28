import Slider from '../../components/Slider';

function SelectModule() {
  const modules = [
    {
      id: 1,
      name: 'Astronomia antiga',
      amountLessons: 20,
      description: 'Conceitos básicos da astronomia antiga',
      imageUrl: 'https://picsum.photos/200/300',
      unlockable: false,
      completedLessons: 3,
    },
    {
      id: 2,
      name: 'Astronomia no dia a dia',
      amountLessons: 12,
      imageUrl: 'https://picsum.photos/200/300',
      description: 'Conceitos básicos da astronomia antiga',
      unlockable: true,
      completedLessons: 3,
    },
    {
      id: 3,
      name: 'O sistema solar',
      amountLessons: 14,
      imageUrl: 'https://picsum.photos/200/300',
      description: 'Conceitos básicos do sistema solar',
      unlockable: false,
      completedLessons: 3,
    },
    {
      id: 4,
      name: 'Cosmologia',
      amountLessons: 6,
      imageUrl: 'https://picsum.photos/200/300',
      description: 'Conceitos básicos do sistema solar',
      unlockable: true,
      completedLessons: 3,
    },
    {
      id: 5,
      name: 'Cosmologia',
      amountLessons: 6,
      imageUrl: 'https://picsum.photos/200/300',
      description: 'Conceitos básicos do sistema solar',
      unlockable: false,
      completedLessons: 3,
    },

  ];

  return (
    <Slider data={modules} />
  );
}

export default SelectModule;
