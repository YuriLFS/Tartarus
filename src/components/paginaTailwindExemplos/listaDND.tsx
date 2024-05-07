import { useState } from "react";

interface ListItemProps {
  text: string;
  onDelete: () => void;
}

const ListItem: React.FC<ListItemProps> = ({text, onDelete}) => {
    return(
        <div className="flex items-center justify-between p-2 bg-gray-100 rounded border border-black">
            <p className="truncate">{text}</p>
            <button onClick={onDelete} className="text-red-500 hover:text-red-700">
                Delete
            </button>
        </div>
    )
}

export const ListDragAndDrop = () => {

    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
        setItems([...items, inputValue])
        setInputValue('');
        }
    }

    const handleDeleteItem = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.dataTransfer.setData('index', index.toString());
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
        const dragIndex = Number(e.dataTransfer.getData('index'));
        const newItems = [...items];
        const [dragItem] = newItems.splice(dragIndex, 1);
        newItems.splice(dropIndex, 0, dragItem);
        setItems(newItems);
    };

    return(
        <div>
            <h2 className="underline pl-4">Lista com Drag And Drop</h2>
            <div className="p-4 overflow-auto h-[450px]">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Digite um item..."
                    className="w-full px-1 py-2 mb-4 border border-gray-300 rounded-md"
                />
                <button onClick={handleAddItem} className="block w-full px-3 py-2 mb-4 text-white bg-blue-700 rounded border-2 border-black">
                    Adicionar
                </button>
                <div className="space-y-4">
                    {items.map((item, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        <ListItem text={item} onDelete={() => handleDeleteItem(index)} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}