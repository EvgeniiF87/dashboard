import { useState } from 'react';
import { Search } from '../../../../shared/svg';
import { CloseTag } from '../../../../shared/svg/CloseTag';

import style from './ModalEventsTags.module.scss';


const ModalEventsTags = () => {
  const [value, isValue] = useState('');
  const [resultSearch, isResultSearch] = useState<
    ({ category: string; tags: string[] })[]
  >([]);

  const listTeg = [
    {
      category: 'парк',
      tags: [
        'Отдых всей семьей',
        'вкусно по есть',
        'самокат на прокат',
        'аттракционы',
      ],
    },
    {
      category: 'фитнес центр',
      tags: ['Отдых всей семьей', 'спорт'],
    },
  ];

  function searchTag(tag: string) {
    return listTeg.map((res) => {
      if (
        res.tags.find((str) => str.toUpperCase().includes(tag.toUpperCase()))
      ) {
        return {
          category: res.category,
          tags: res.tags.filter((str) =>
            str.toUpperCase().includes(tag.toUpperCase())
          ),
        };
      } else {
        return [];
      }
    });
  }

  return (
    <div className={style.root}>
      {' '}
      <span className={style.title}>Добавление тегов</span>

{/* --------------<SearchTags---------------------------- */}
{/* ----------------------------------------------------- */}
      <div className={style.add_tag_container}>
        <Search />
        <input
          value={value ?? ''}
          placeholder="Введите тег"
          onChange={(evt) => {
            isValue(evt.target.value);
            //@ts-ignore
            isResultSearch(searchTag(evt.target.value));
          }}
        />
        {value && (
          <div className={style.drop_down_window}>
            <p className={style.tag_value}>{value}</p>
            <p className={style.result_search}>Похожие теги:</p>
            <ul>
              {resultSearch.length > 0 &&
                resultSearch.map((data, i) => (
                  <li key={i} className={style.list_category_search}>
                    <h1 className={style.title_category_search}>
                      {data.category ?? ""}
                    </h1>
                    <ul className={style.teg_container_search}>
                      {data.tags?.map((tag, i) => (
                        <li key={i} className={style.tag_search}>
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
{/* ----------------------------------------------------- */}


      <span className={style.title}>Добавленные теги</span>
      <ul className={style.container_list_category}>
        {listTeg.map((data, i) => (
          <li key={i} className={style.list_category}>
            <h1 className={style.title_category}>{data.category}</h1>
            <ul className={style.teg_container}>
              {data.tags.map((tag, i) => (
                <li key={i} className={style.tag}>
                  <h2 className={style.teg_text}>{`# ${tag}`}</h2>
                  <CloseTag />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button className={style.button_save}>Сохранить</button>
    </div>
  );
};

export { ModalEventsTags };
