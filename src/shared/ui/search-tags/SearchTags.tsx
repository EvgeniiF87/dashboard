import { Search } from '../../svg';

import styles from './SearchTags.module.scss';


type SearchTagsProps = {
  value: string;
  onChange: (value: string) => void;
  resultSearch: {category: string, tags: string[]}[];
}

const SearchTags = ({ value, onChange, resultSearch }: SearchTagsProps) => {


  return (
    <div className={styles.add_tag_container}>
        <Search />
        <input
          value={value ?? ''}
          placeholder="Введите тег"
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <div className={styles.drop_down_window}>
            <p className={styles.tag_value}>{value}</p>
            <p className={styles.result_search}>Похожие теги:</p>
            <ul>
              {resultSearch &&
                resultSearch.map((data, i) => (
                  <li key={i} className={styles.list_category_search}>
                    <h1 className={styles.title_category_search}>
                      {data.category}
                    </h1>
                    <ul className={styles.teg_container_search}>
                      {data.tags?.map((tag, i) => (
                        <li key={i} className={styles.tag_search}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        )}
        
      </div>
  );
};

export { SearchTags };