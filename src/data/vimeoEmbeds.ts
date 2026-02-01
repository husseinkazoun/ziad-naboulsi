// Source of truth: vimeo_embed_results.json
// Maps Vimeo ID to responsive embed HTML

export const vimeoEmbeds: Record<string, string> = {
  // Order 1: The Crow Outlet Sportswear
  "1160737812": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160737812?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,

  // Order 2: Trading Ad
  "1160738000": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160738000?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,

  // Order 3: Merhbi Clothing Factory
  "1160745507": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160745507?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,

  // Order 4: Wings for Hope
  "1160749870": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160749870?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,

  // Order 5: SSC Riyada w Hkayat
  "1160750533": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160750533?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,

  // Order 6: Milq Records Reel 2
  "1160735239": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160735239?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,

  // Order 7: Milq Records Reel 1
  "1160736857": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160736857?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,

  // Order 8: Solo Films
  "1160733719": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160733719?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,

  // Order 9: Sakr Furniture
  "1160737642": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160737642?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
};

export const getVimeoEmbed = (vimeoId: string): string | null => {
  return vimeoEmbeds[vimeoId] || null;
};
