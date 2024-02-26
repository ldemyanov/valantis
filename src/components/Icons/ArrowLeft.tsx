const ArrowLeft: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5 7.5C11.7761 7.5 12 7.72386 12 8C12 8.27614 11.7761 8.5 11.5 8.5H5.70711L7.85355 10.6464C8.04882 10.8417 8.04882 11.1583 7.85355 11.3536C7.65829 11.5488 7.34171 11.5488 7.14645 11.3536L4.14645 8.35355C3.95118 8.15829 3.95118 7.84171 4.14645 7.64645L7.14645 4.64645C7.34171 4.45118 7.65829 4.45118 7.85355 4.64645C8.04882 4.84171 8.04882 5.15829 7.85355 5.35355L5.70711 7.5H11.5Z"
    />
  </svg>
);

export default ArrowLeft;
