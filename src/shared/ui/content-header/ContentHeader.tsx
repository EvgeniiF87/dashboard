import { useNavigate } from 'react-router-dom';

import styles from './ContentHeader.module.scss';

type ContentHeaderProps = {
  title?: string;
  breadcrumbs?: { name: string; href: string | null }[];
}

const ContentHeader = ({ breadcrumbs,  title }: ContentHeaderProps) => {
 const navigate = useNavigate()
 
  return (
    <>
      <div className={styles.root}>
        {breadcrumbs && (
          <ul className={styles.breadcrumb_list}>
            {breadcrumbs.map((breadcrumb, index) => (
              <li
                key={index}
                onClick={() => breadcrumb?.href && navigate(breadcrumb?.href)}
              >
                {breadcrumb.name}
              </li>
            ))}
          </ul>
        )}
        <h1 className={styles.title}>{title}</h1>
      </div>
    </>
  );
};

export { ContentHeader };
