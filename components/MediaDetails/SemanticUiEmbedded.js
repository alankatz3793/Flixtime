function SemanticUiEmbedded({ trailerId }) {
  return (
    <div className="ui active embed" style={{ borderRadius: 10 }}>
      <div className="embed">
        <iframe
          frameBorder="0"
          height="100%"
          scrolling="no"
          src={`//www.youtube.com/embed/${trailerId}?autohide=true&amp;amp&amp;amp;color=%23444444&amp;amp;hq=true&amp;amp;jsapi=false&amp;amp;modestbranding=false&amp;amp;rel=1`}
          title="Embedded content from youtube."
          width="100%"
        />
      </div>
    </div>
  );
}

export default SemanticUiEmbedded;
