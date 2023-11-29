'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { X } from 'lucide-react';

interface FilterProps {
  valueKey: string;
  name: string;
  data: {
    id: string;
    name: string;
  }[];
}

const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeFilterId = searchParams.get(valueKey);
  const activeFilterValue = data.find(
    (item) => item.id === activeFilterId
  )?.name || '';

  let searchParamsValues = {} as Record<string, string>;

  searchParams.forEach((value, key) => {
    searchParamsValues[key] = value;
  });

  const createNewUrl = () => {
    let url = process.env.NEXT_PUBLIC_ROOT_URL + pathname;

    let index = 0;
    for (const key in searchParamsValues) {
      if (index === 0) {
        url += `?${key}=${searchParamsValues[key]}`;
      } else {
        url += `&${key}=${searchParamsValues[key]}`;
      }
      index++;
    }

    return url;
  };

  const onFilterItemClick = (valueKey: string, id: string) => {
    searchParamsValues[valueKey] = id;

    const url = createNewUrl();
    router.push(url, { scroll: false });
  };

  const clearFilterItem = () => {
    delete searchParamsValues[valueKey];

    const url = createNewUrl();
    router.push(url, { scroll: false });
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-bold">{name}:</h3>
        {searchParamsValues[valueKey] && (
          <div className="flex items-center gap-2">
            <span>{activeFilterValue}</span>
            <Button
              className="px-1 py-1"
              onClick={clearFilterItem}
            >
              <X size={15} color="white" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={onFilterItemClick.bind(null, valueKey, item.id)}
            className={cn('px-5 py-2 text-sm bg-gray-200 rounded-full', {
              'bg-gray-700 text-white':
                searchParamsValues[valueKey] === item.id,
            })}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
